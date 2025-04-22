import type { PropsWithChildren } from 'react'

import { Header } from './header/header'

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<Header />
			<section>{children}</section>
		</div>
	)
}
