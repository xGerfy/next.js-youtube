'use client'

import { videoService } from '@/services/video.service'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { useQuery } from '@tanstack/react-query'

export function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section>
			<h2>Explore</h2>
			<div className='grid grid-cols-6 gap-6'>
				{isLoading
					? 'Loading...'
					: data?.data.videos.length &&
						data.data.videos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
							/>
						))}
			</div>
		</section>
	)
}
