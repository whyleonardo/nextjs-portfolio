import Image from 'next/image'
import { sanityImageBuilder } from 'services/sanityClient'
import { PersonalInfo } from 'utils/@types/personalInfo'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'


interface HomeSectionProps {
	personalInfo: PersonalInfo
	translate: (key: string, params?: {
		[key: string]: string | number;
	} | undefined) => any
}

const HomeSection = ({ personalInfo: { name, profilePhoto }, translate }: HomeSectionProps) => {
	const image = sanityImageBuilder.image(profilePhoto).url()
	return (
		<section id="home" className="flex flex-col  items-center">
			<Image
				alt="profile"
				src={image}
				width="300"
				height="300"
				className="bg-transparent animate-profile rounded-full"
			/>

			<div className='text-center'>
				<h1
					className='text-4xl font-bold opacity-90'
				>
					{name}
				</h1>

				<h3
					className='text-2xl opacity-80'
				>
					{translate('home.role')}
				</h3>

				<p
					className='text-center opacity-70 mt-6'
				>
					{translate('home.description')}
				</p>
			</div>

			<button
				className='flex items-center gap-2 bg-gray-800 dark:bg-transparent dark:border dark: border-white/70 rounded-xl py-4 px-8 mt-12 font-bold text-lg text-white dark:text-white/80 hover:opacity-60'
			>
				{translate('home.sayHello')}
				<PaperAirplaneIcon className='w-6 rotate-6' />
			</button>

		</section>
	)
}

export default HomeSection

