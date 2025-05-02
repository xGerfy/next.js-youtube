import { axiosClassic } from '@/api/axios'
import type { IData } from '@/types/data.types'
import type { IVideo } from '@/types/video.types'

class VideoService {
	private _VIDEOS = '/videos'

	getAll(searchTerm?: string | null) {
		return axiosClassic.get<IData>(
			this._VIDEOS,
			searchTerm
				? {
						params: {
							searchTerm
						}
					}
				: {}
		)
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
	}

	getVideoGames() {
		return axiosClassic.get<IData>(`${this._VIDEOS}/games`)
	}

	getExploreVideos() {
		return axiosClassic.get<IData>(`${this._VIDEOS}/explore`)
	}
}

export const videoService = new VideoService()
