import { PAGE } from '@/config/public-page.config'
import { videoService } from '@/services/video.service'
import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Video games',
	description: 'Video games...',
	alternates: {
		canonical: PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Video games'
	}
}

export default async function VideoGamesPage() {
	const videos = await videoService.getVideoGames()

	console.log(videos.data)

	return (
		<section>
			<Heading Icon={Gamepad2}>Video games</Heading>
			<div className='grid grid-cols-6 gap-6'>
				{!!videos.data ? (
					videos.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
						/>
					))
				) : (
					<div>Video games are temporarily unavailable</div>
				)}
			</div>
		</section>
	)
}
