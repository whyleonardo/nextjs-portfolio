import NavLinks from '../../Buttons/NavLinks'
import NavMenu from '../NavMenu'
import { ParamsProps } from 'utils/@types/params'
import { useState } from 'react'

const Header = ({ params }: ParamsProps) => {
	return (
		<header className=' flex w-full px-4 h-16 md:h-20 bg-transparent'>

			<div className='flex items-center justify-between mx-auto w-full max-w-7xl'>

				<span className='text-2xl'>
					CL
				</span>

				<NavMenu>
					{/* @ts-expect-error Async Server Component */}
					<NavLinks params={params} />
				</NavMenu>
			</div>
		</header>
	)
}

export default Header

