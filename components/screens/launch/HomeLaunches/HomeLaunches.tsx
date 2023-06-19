import { FC } from 'react';

import { SET_LOADING_TRIGGER } from '../../../../redux/launches/launches.slice';

import { useAppSelector } from '../../../../hooks';

import { Card, Error, Spinner, Title } from '../../..';

import s from './HomeLaunches.module.scss';

export const HomeLaunches: FC = () => {
	const { launchesData, isLoading, isError, isEnd } = useAppSelector(
		(state) => state.launches
	);

	return (
		<div id="launches" className={s.launches}>
			<Title view="h2" className={s.launches__title}>
				Расписание запусков ракет
			</Title>
			<div className={s.launches__inner}>
				{launchesData.map((launch: RecentData) => {
					return (
						<Card size="m" key={launch.id} data={launch} path={'launch'} />
					);
				})}
			</div>

			{isLoading && <Spinner />}
			{isError && <Error refreshCallback={() => SET_LOADING_TRIGGER(true)} />}
			{isEnd && (
				<span className={s.launches__alert}>
					Все запланированные запуски были загружены
				</span>
			)}
		</div>
	);
};
