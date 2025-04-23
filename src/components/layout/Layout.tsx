'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import styles from './Layout.module.css'
import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true)

	const toggleSidebar = () => {
		setIsShowedSidebar(!isShowedSidebar)
	}

	return (
		<main
			className={cn(
				'flex min-h-screen',
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}
