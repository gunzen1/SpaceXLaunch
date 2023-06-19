import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';

import { FETCH_LAUNCHES_DATA, SET_LAUNCHES_STATIC, SET_LOADING_TRIGGER } from '../../redux/launches/launches.slice';
import { LAUNCH_API, transformLaunchesData } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { HomeLaunches, Meta } from '../../components';
import { MainLayout } from '../../layout/';

const Home: NextPage<LaunchListPageProps> = ({ staticLaunchesData }) => {
	const [offset, setOffset] = useState(12);

	const dispatch = useAppDispatch();
	const { loadingTrigger, isLoading, isError, isEnd } = useAppSelector(
		(state) => state.launches
	);

	useEffect(() => {
		dispatch(SET_LAUNCHES_STATIC(staticLaunchesData.slice(0, 6)));
	}, [staticLaunchesData, dispatch]);

	const getLaunchesDataStatic = () => {
		const launchesData = staticLaunchesData.slice(0, offset);
		dispatch(SET_LAUNCHES_STATIC(launchesData));
		setOffset((prevState) => prevState + 6);
		dispatch(SET_LOADING_TRIGGER(false));
	};

	useEffect(() => {
		if (loadingTrigger && offset <= 18) {
			getLaunchesDataStatic();
		}
		if (loadingTrigger && offset > 18) {
			dispatch(FETCH_LAUNCHES_DATA(offset));
			setOffset((prevState) => prevState + 6);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loadingTrigger]);

	const event = useCallback(() => {
		if (isLoading) return;
		if (
			window.innerHeight + window.scrollY >=
			document.body.scrollHeight - 100
		) {
			dispatch(SET_LOADING_TRIGGER(true));
		}
	}, [dispatch, isLoading]);

	useEffect(() => {
		window.addEventListener('scroll', event);
		if (isError || isEnd) window.removeEventListener('scroll', event);
		return () => window.removeEventListener('scroll', event);
	}, [isError, isEnd, event]);

	return (
		<>
			<Meta
				title="SpaceX Launches"
				description="Single page application with React, Redux, Next.js"
			/>
			<MainLayout>
				<div className="container fill container_margined">
					<HomeLaunches />
				</div>
			</MainLayout>
		</>
	);
};

export default Home;


export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: launchesData } = await axios.get(
			`${LAUNCH_API}/upcoming?mode=detailed&limit=15&offset=0`
		);
		const staticLaunchesData = transformLaunchesData(launchesData.results);

		return {
			props: { staticLaunchesData },
			revalidate: 43200,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};