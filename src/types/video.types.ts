import type { IChannel } from './channel.types'

export interface IVideo {
	id: string
	title: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: number
	isPublic: boolean
	channel: IChannel
	createdAt: string
	publicId: string
}
