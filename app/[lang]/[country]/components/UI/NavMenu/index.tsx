'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Disclosure, Transition } from '@headlessui/react'
import ToggleTheme from '../../Buttons/ToggleTheme'
import TranslateButton from '../../Buttons/TranslateButtons'
import { useState } from 'react'

const NavMenu = ({ children }: { children: any }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<div className="hidden md:flex items-center space-x-10">
				<nav className="space-x-6">{children}</nav>

				<div className="flex items-center">
					<TranslateButton />
					<ToggleTheme />
				</div>
			</div>

			<Disclosure>
				<Disclosure.Button
					title={'Open Menu'}
					// @ts-ignore
					onClick={() => setIsOpen((state) => !state)}
					className="md:hidden fixed right-4"
				>
					<Bars3Icon className="h-8 w-8" />
				</Disclosure.Button>

				<Transition
					show={isOpen}
					enter="transition-opacity duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Disclosure.Panel className="md:hidden absolute z-40 left-0 top-0 w-full">
						{isOpen && (
							<div className="flex flex-col h-5/6 overflow-y-hidden dark:bg-black bg-white">
								<div className="flex items-center justify-between pr-16 pl-6">
									<TranslateButton />
									<ToggleTheme />

									<Disclosure.Button
										title={'Close Menu'}
										// @ts-ignore
										onClick={() => setIsOpen((state) => !state)}
										className="md:hidden fixed right-4"
									>
										<XMarkIcon className="h-8 w-8" />
									</Disclosure.Button>
								</div>

								<button
									title="Nav to Section"
									onClick={() => setIsOpen((state) => !state)}
								>
									<nav className="flex flex-col justify-center h-[80vh] space-y-8">
										{children}
									</nav>
								</button>
							</div>
						)}
					</Disclosure.Panel>
				</Transition>
			</Disclosure>
		</>
	)
}

export default NavMenu
