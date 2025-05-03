import { PAGE } from '@/config/public-page.config'
import { COLORS } from '@/constants/colors.constants'
import { SquarePlay } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
	return (
		<Link
			href={PAGE.HOME}
			className='inline-flex items-center gap-1.5'
		>
			<SquarePlay
				color={COLORS.primary}
				size={29}
			/>
			<span className='font-medium text-xl'>YOU TUBE</span>
		</Link>
	)
}
