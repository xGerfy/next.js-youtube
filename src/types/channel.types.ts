import type { IUser } from './user.types'
import type { IVideo } from './video.types'

export interface IChannel {
	id: string
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	// user:
	videos: IVideo[]
	subscribers: []
	createdAt: string
	user: IUser
}
