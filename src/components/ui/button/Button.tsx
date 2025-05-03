import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: ReactNode
}

export function Button({ children, isLoading, ...props }: Props) {
	return (
		<button
			className='py-2 px-5 bg-primary text-white font-semibold rounded hover:bg-red-400 transition-colors disabled:border-r-gray-400'
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? '...Loading' : children}
		</button>
	)
}
