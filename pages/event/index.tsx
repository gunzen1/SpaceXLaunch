import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';


import { SET_EVENTS_LIST_DATA } from '../../redux/eventsList/eventsList.slice';
import { transformEventsListData, EVENTS_API } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Meta, Slider } from '../../components';
import { MainLayout } from '../../layout/';


const Home: NextPage<EventListPageProps> = (
	{
		staticEventsData,
	}
) => {
	const dispatch = useAppDispatch();

	const { eventsListData } = useAppSelector((state) => state.eventsList);

	useEffect(() => {
		dispatch(SET_EVENTS_LIST_DATA(staticEventsData));
	}, [staticEventsData, dispatch]);

	return (
		<>
			<Meta
				title="Upcoming Space Events"
				description="Single page application with React, Redux, Next.js"
			/>

			<MainLayout>
				<div className="container fill container_margined">
					<Slider data={eventsListData} path={'event'} />
				</div>
			</MainLayout>
		</>
	);
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: eventsData } = await axios.get(
			`${EVENTS_API}/upcoming/?limit=15&offset=0`
		);

		const staticEventsData = transformEventsListData(eventsData.results);

		return {
			props: { staticEventsData },
			revalidate: 43200,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};