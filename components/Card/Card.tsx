import { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { useAppSelector } from '../../hooks';
import { Tag, Title } from '../../components';
import rocketImage from '../../public/images/rocket-3.png';

import styles from './Card.module.scss';

dayjs.extend(utc);

interface CardProps {
	data: RecentData;
	size: CardSize;
	path: string;
	type?: 'event' | 'rocket';
} 

export const Card: FC<CardProps> = ({ data, size, path, type = 'event' }) => {
	const [isCurrent, setIsCurrent] = useState<boolean>(false);
	const pageId = useAppSelector((state) => state.singleEvent.eventInfo.id);
	const { id, image, info, name } = data;
	const { pathname } = useRouter();

	const cardImg = image || rocketImage;

	useEffect(() => {
		if (pathname !== `/${type}/[id]`) {
			setIsCurrent(false);
			return;
		}
		if (id === pageId) {
			setIsCurrent(true);
			return;
		}
		setIsCurrent(false);
	}, [pathname, id, pageId]);

	return (
		<Link href={`/${path}/${[id]}`}>
			<a className={cn({ [styles.disabled]: isCurrent })}>
				<div
					className={cn(styles.main, {
						[styles.main_small]: size === 's',
						[styles.main_current]: isCurrent,
					})}
				>
					<div className={cn(styles.header, {
						[styles.header_small]: size === 's'
					})}>
						<div className={cn(styles.image, {
							[styles.image_small]: size === 's',
						})}>
							<Image
								src={cardImg}
								alt={name}
								layout="fill"
								objectFit="contain"
								objectPosition="center 25%"
								draggable="false"
							/>
						</div>
						<Tag className={cn(styles.tag, {
							[styles.tag_small]: size === 's',
						})} gradient>
							{ 
								type === 'event' 
								? dayjs.utc(info).format('MMM DD, YYYY, h:mm a') 
								: info
							}
						</Tag>
					</div>
					<Title view="h3" className={cn(styles.title, {
							[styles.title_small]: size === 's',
						})}>
						{name}
					</Title>
				</div>
			</a>
		</Link>
	);
};
