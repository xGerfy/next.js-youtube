import { Layout } from '@/components/layout/Layout'
import { Providers } from '@/providers/Providers'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import './globals.css'

const notoSans = Noto_Sans({
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		absolute: 'YouTube',
		template: `%s | YouTube`
	},
	description: 'Best app for video watching'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={notoSans.className}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}
