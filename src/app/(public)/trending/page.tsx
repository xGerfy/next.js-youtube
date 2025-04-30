import { PAGE } from '@/config/public-page.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Trending...',
	alternates: {
		canonical: PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Trending'
	}
}

export default function TrendingPage() {
	return <div>Trending</div>
}
