import { videoService } from '@/services/video.service'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { Flame } from 'lucide-react'

import { Explore } from './explore/Explore'

export const revalidate = 100

export default async function Home() {
	const data = await videoService.getTrendingVideos()

	return (
		<section>
			<section>
				<h2>Trending</h2>
				<div className='grid grid-cols-6 gap-6'>
					{data.data &&
						data.data.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
				</div>
			</section>
			<Explore />
		</section>
	)
}
