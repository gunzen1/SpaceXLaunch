import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';

import { SET_ROCKETS_LIST_DATA } from '../../redux/rocketsList/rocketsList.slice';
import { ROCKET_API, transformRocketsListData } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Meta, Card } from '../../components';
import { MainLayout } from '../../layout/';

enum CardType {
  event = 'event',
  rocket = 'rocket'
}

const Home: NextPage<RocketListPageProps> = ({ staticRocketData }) => {
	const dispatch = useAppDispatch();

	const { rocketsListData } = useAppSelector((state) => state.rocketsList);

	useEffect(() => {
		dispatch(SET_ROCKETS_LIST_DATA(staticRocketData));
	}, [staticRocketData, dispatch]);

	return (
		<>
			<Meta
				title="SpaceX Launches"
				description="Single page application with React, Redux, Next.js"
			/>

			<MainLayout>
				<div className="container container_flex container_wrap container_margined">
					{rocketsListData.map((item) => {
						return <Card data={item} size="s" key={item.id} path={CardType.rocket} type={CardType.rocket} />;
					})}
				</div>
			</MainLayout>
		</>
	);
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: rocketsData } = await axios.get(ROCKET_API);

		const staticRocketData = transformRocketsListData(rocketsData);

		return {
			props: { staticRocketData },
			revalidate: 43200,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};