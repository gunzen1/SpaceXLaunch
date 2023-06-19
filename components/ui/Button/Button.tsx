import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	href?: URL | string;
	disabled?: boolean;
	targetBlank?: boolean;
	onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	disabled = false,
	targetBlank = false,
	href = '#',
}) => {
	return (
		<button 
			onClick={onClick}
			className={cn(styles.btn, { 
				[styles.btn_disabled]: disabled 
			})}
			type="button"
		>
			<Link href={href}>
				<a
					className={cn(styles.link, { 
						[styles.link_disabled]: disabled 
					})}
					target={targetBlank ? '_blank' : '_self'}
				>
					{children}
				</a>
			</Link>
		</button>
	);
};
