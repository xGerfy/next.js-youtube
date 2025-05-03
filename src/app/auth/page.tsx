import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

import { Auth } from './Auth'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE
}

export default function AuthPage() {
	return <Auth />
}
