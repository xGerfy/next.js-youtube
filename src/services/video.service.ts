import type { IData } from '@/types/data.types'
import type { IVideo } from '@/types/video.types'
import axios from 'axios'

class VideoService {
	getTrendingVideos() {
		return axios.get<IVideo[]>('http://localhost:4200/api/videos/trending')
	}

	getExploreVideos() {
		return axios.get<IData>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()
