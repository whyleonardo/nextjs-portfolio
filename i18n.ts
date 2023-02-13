
export const defaultLocale = 'pt-BR'
export const locales = ['pt-BR', 'en-US', 'es-ES']
export type ValidLocale = typeof locales[number]

type PathnameLocale = {
  pathname: string
  locale?: never
}

type ISOLocale = {
  pathname?: never
  locale: string
}

type LocaleSource = PathnameLocale | ISOLocale

export const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split('-')
    return {
      lang: localeParts[0],
      country: localeParts[1],
    }
  } else {
    const pathnameParts = pathname!.toLowerCase().split('/')
    return {
      lang: pathnameParts[1],
      country: pathnameParts[2],
    }
  }
}

const dictionaries: Record<ValidLocale, any> = {
  'pt-BR': () =>
    import('dictionaries/pt-BR.json').then((module) => module.default),
  'en-US': () =>
		import('dictionaries/en-US.json').then((module) => module.default),
	'es-ES': () =>
    import('dictionaries/es-ES.json').then((module) => module.default)
} as const

export const getTranslator = async (locale: ValidLocale) => {
const defaultDictionary =
        locale !== defaultLocale
            ? await import(`./dictionaries/${defaultLocale}.json`)
            : ''

  const dictionary = await dictionaries[locale]()
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split('.')
      .reduce((obj, key) => obj && obj[key], dictionary)
   if (!translation && locale !== defaultLocale) {
            // Back-up to default locale dictionary
            translation = key
                .split('.')
                .reduce((obj, key) => obj && obj[key], defaultDictionary);
            if (!translation) {
                return key;
            }
        }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value))
      })
    }
    return translation
  }
}
