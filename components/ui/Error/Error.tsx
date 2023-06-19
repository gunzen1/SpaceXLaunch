import { FC } from 'react';
import { Action, AsyncThunkAction } from '@reduxjs/toolkit';
import Image from 'next/image';
import cn from 'classnames';

import { useAppDispatch } from '../../../hooks';
import styles from './Error.module.scss';
import errorImage from './error.gif';

interface IErrorProps {
	refreshCallback: () =>
		| Action<string>
		| AsyncThunkAction<RecentData[], void, Record<string, unknown>>;
}

export const Error: FC<IErrorProps> = ({ refreshCallback }) => {
	const dispatch = useAppDispatch();

	return (
		<div className={cn(styles.main)}>
			<Image
				src={errorImage}
				width="200"
				height="200"
				alt="error picture"
				style={{ borderRadius: '30%' }}
			/>

			<h2 className={cn(styles.title)}>Упс! Возникла ошибка при загрузке</h2>

			<a
				onClick={() => dispatch(refreshCallback())}
				className={cn(styles.link)}
			>
				Загрузить снова
			</a>
		</div>
	);
};
