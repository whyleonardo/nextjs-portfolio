import { NextRequest, NextResponse } from "next/server"

const defaultLocale = "pt-BR"
let locales = ["pt-BR", "en-US"]

type PathnameLocale = {
  pathname: string
  locale?: never
}

type ISOLocale = {
  pathname?: never
  locale: string
}

type LocaleSource = PathnameLocale | ISOLocale

const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split("-")
    return {
      lang: localeParts[0],
      country: localeParts[1],
    }
  } else {
    const pathnameParts = pathname!.toLowerCase().split("/")
    return {
      lang: pathnameParts[1],
      country: pathnameParts[2],
    }
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale })
  const currentPathnameParts = getLocalePartsFrom({ pathname })

  // Check if the default locale is in the pathname
  if (
    currentPathnameParts.lang === defaultLocaleParts.lang &&
    currentPathnameParts.country === defaultLocaleParts.country
  ) {
    // we want to REMOVE the default locale from the pathname,
    // and later use a rewrite so that Next will still match
    // the correct code file as if there was a locale in the pathname
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocaleParts.lang}/${defaultLocaleParts.country}`,
          pathname.startsWith("/") ? "/" : ""
        ),
        request.url
      )
    )
  }

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    const localeParts = getLocalePartsFrom({ locale })
    return !pathname.startsWith(`/${localeParts.lang}/${localeParts.country}`)
  })

  if (pathnameIsMissingValidLocale) {
    // rewrite it so next.js will render `/` as if it was `/en/us`
    return NextResponse.rewrite(
      new URL(
        `/${defaultLocaleParts.lang}/${defaultLocaleParts.country}${pathname}`,
        request.url
      )
    )
  }
}



export const config = {
// do not localize next.js paths
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",],
}
