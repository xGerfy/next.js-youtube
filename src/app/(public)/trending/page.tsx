import { PAGE } from '@/config/public-page.config'
import { videoService } from '@/services/video.service'
import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Trending...',
	alternates: {
		canonical: PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Trending'
	}
}

export default async function TrendingPage() {
	const videos = await videoService.getTrendingVideos()

	return (
		<section>
			<Heading Icon={Flame}>Trending</Heading>
			<div className='grid grid-cols-6 gap-6'>
				{!!videos.data ? (
					videos.data.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))
				) : (
					<div>Trends are temporarily unavailable</div>
				)}
			</div>
		</section>
	)
}
