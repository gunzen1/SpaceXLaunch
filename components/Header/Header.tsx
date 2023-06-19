import React, { FC } from 'react';


import { MyLink } from '../ui/MyLink/MyLink';


import styles from './Header.module.scss';


const Pages = [
	{
		href: '/',
		name: 'Домой'
	},
	{
		href: '/event',
		name: 'События'
	},
	{
		href: '/launch',
		name: 'Запуски'
	},
	{
		href: '/rocket',
		name: 'Ракеты'
	}
];

interface pathParams {
	path: string;
}

export const Header: FC<pathParams> = ({ path }) => {
	return (
		<header className={styles.main}>
			<div className="container container_flex">	
				<div className={styles.nav}>
					{Pages.map((item) => (
						<MyLink
							key={item.name}
							name={item.name}
							href={item.href}
							isActive={item.href === path}
						/>
					))}
				</div>
			</div>
		</header>
	);
};