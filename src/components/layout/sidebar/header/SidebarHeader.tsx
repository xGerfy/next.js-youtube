import { PAGE } from '@/config/public-page.config'
import { COLORS } from '@/constants/colors.constants'
import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				className='opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>

			<Link
				href={PAGE.HOME}
				className='flex items-center gap-1.5'
			>
				<SquarePlay
					color={COLORS.primary}
					size={29}
				/>
				<span className='font-medium text-xl'>YOU TUBE</span>
			</Link>
		</div>
	)
}
