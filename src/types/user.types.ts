import type { IChannel } from './channel.types'
import type { IWatchHistory } from './histoty.types'

export interface IUser {
	id: string
	name?: string
	email: string
}

export interface IFullUser extends IUser {
	channel?: IChannel
	subscriptions: IChannel[]
	watchHistory: IWatchHistory[]
}
