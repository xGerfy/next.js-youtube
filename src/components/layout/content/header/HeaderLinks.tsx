import { STUDIO_PAGE } from '@/config/studio-page.config'
import { Bell, LayoutGrid, PlusSquare } from 'lucide-react'
import Link from 'next/link'

export function HeaderLinks() {
	return (
		<div className='flex items-center gap-5'>
			<Link
				href={STUDIO_PAGE.UPLOAD_VIDEO}
				className='transition-opacity duration-300 hover:opacity-100 opacity-50'
			>
				<PlusSquare size={20} />
			</Link>
			<Link
				href={STUDIO_PAGE.HOME}
				className='transition-opacity duration-300 hover:opacity-100 opacity-50'
			>
				<LayoutGrid size={20} />
			</Link>
			<Link
				href={STUDIO_PAGE.HOME}
				className='transition-opacity duration-300 hover:opacity-100 opacity-50'
			>
				<Bell size={20} />
			</Link>
		</div>
	)
}
