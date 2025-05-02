import { videoService } from '@/services/video.service'
import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Explore } from './explore/Explore'

export const revalidate = 100

export const metadata: Metadata = {
	title: 'Explore',
	description: 'Best video platform',
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Explore'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()

	return (
		<section>
			{!!data.data && (
				<section className='mb-10'>
					<Heading Icon={Flame}>Trending</Heading>
					<div className='grid grid-cols-6 gap-6'>
						{data.data.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
					</div>
				</section>
			)}
			<Explore />
		</section>
	)
}
