import Image from 'next/image'
import img from '@/assets/imgs/photo-1560250097-0b93528c311a.webp'

const HomeSection = () => {
	return (
		<section
			id="home"
			className=""
		>


			<Image
				alt='profile'
				src={img}
				width='300'
				height='300'
				className='bg-red-500 animate-profile shadow-inner '
			/>
		</section>
	)
}

export default HomeSection
