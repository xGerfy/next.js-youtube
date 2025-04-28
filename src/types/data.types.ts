import type { IVideo } from './video.types'

export interface IData {
	limit: number
	page: number
	totalCount: number
	totalPage: number
	videos: IVideo[]
}
