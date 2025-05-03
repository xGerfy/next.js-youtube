import { Menu } from 'lucide-react'

import { Logo } from './Logo'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				className='opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>

			<Logo />
		</div>
	)
}
