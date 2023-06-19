import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './MyLink.module.scss';

interface MyLinkProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	name: string;
	isActive: boolean;
	href?: URL | string;
}

export const MyLink: FC<MyLinkProps> = ({
	name,
	isActive,
	href = '/',
}) => {
	return (
		<div
			className={cn(styles.main)}
		>
			<Link href={href}>
				<a
					className={cn(styles.link, {
						[styles.link_active]: isActive
					})}
					target= '_self'
				>
					{name}
				</a>
			</Link>
		</div>
	);
};
