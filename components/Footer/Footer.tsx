import { FC } from 'react';
import Image from 'next/image';


import SpaceX from '../../public/images/space-x.png';

import styles from './Footer.module.scss';


interface pathParams {
	path: string;
}

export const Footer: FC<pathParams> = ({ path })=> {

	return (
		<footer className={styles.main}>
			<div className="container">
				<div className={styles.inner}>
					<Image src={SpaceX} alt="space-x logo" height={70} width={200} objectFit='contain' />
					<span className={styles.copyright}>gunzenroses © 2023</span>
				</div>
			</div>
		</footer>
	);
};
