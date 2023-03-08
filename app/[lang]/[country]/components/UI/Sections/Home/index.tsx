import Image from 'next/image'
import { sanityImageBuilder } from 'services/sanityClient'
import { PersonalInfo } from 'utils/@types/personalInfo'

interface HomeSectionProps {
	personalInfo: PersonalInfo
}

const HomeSection = ({ personalInfo }: HomeSectionProps) => {
	const image = sanityImageBuilder.image(personalInfo.profilePhoto).url()
	return (
		<section id="home" className="">
			<Image
				alt="profile"
				src={image}
				width="300"
				height="300"
				className="bg-red-500 animate-profile shadow-inner"
			/>
		</section>
	)
}

export default HomeSection
