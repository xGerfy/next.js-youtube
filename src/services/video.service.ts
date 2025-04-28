import type { IData } from '@/types/data.types'
import axios from 'axios'

class VideoService {
	getExploreVideos() {
		return axios.get<IData>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()
