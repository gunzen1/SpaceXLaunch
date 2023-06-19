import { FC, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import { Card, Title } from '../../components';
import ArrowLeft from '../../public/icons/arrow-left.svg';
import ArrowRight from '../../public/icons/arrow-right.svg';

import styles from './Slider.module.scss';

interface SliderProps {
	data: Array<RecentData>;
	path: string;
}

export const Slider: FC<SliderProps> = ({ data, path }) => {
	const [position, setPosition] = useState<number>(0);

	const calculateMaxViewWidth = (length: number): number => length * 400 + 1200;
	const containerWidth = calculateMaxViewWidth(-data.length);

	const next = useCallback(
		(position: number) => {
			position - 400 < calculateMaxViewWidth(-data.length)
				? setPosition(0)
				: setPosition((prevState) => prevState - 400);
		},
		[data.length]
	);

	const prev = (position: number) => {
		position + 400 > 0
			? setPosition(calculateMaxViewWidth(-data.length))
			: setPosition((prevState) => prevState + 400);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			next(position);
		}, 3000);
		return () => clearInterval(interval);
	}, [position, containerWidth, next]);

	return (
		<div className={cn(styles.main)}>
			<div className={cn(styles.header)}>
				<Title view="h2" className={cn(styles.title)}>
					Ближайшие события 
				</Title>
				<div className={cn(styles.navigation)}>
					<button type="button" aria-label="previous picture">
						<ArrowLeft onClick={() => prev(position)} className={cn(styles.arrow)} />
					</button>
					<button type="button" aria-label="next picture">
						<ArrowRight onClick={() => next(position)} className={cn(styles.arrow)} />
					</button>
				</div>
			</div>

			<div className={cn(styles.inner)}>
				<div
					className={cn(styles.view)}
					style={{ transform: `translateX(${position}px)` }}
				>
					{data.map((item) => {
						return <Card data={item} size="s" key={item.id} path={path} />;
					})}
				</div>
			</div>
		</div>
	);
};
