import axios from 'axios';
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';

import { SET_SINGLE_ROCKET } from '../../redux/singleRocket/singleRocket.slice';
import { ROCKET_API, transformSingleRocketData } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Meta, RocketInfo, RocketIntro } from '../../components';
import { MainLayout } from '../../layout';


const Rocket: NextPage<RocketPageProps> = ({ singleRocketData }) => {
	const dispatch = useAppDispatch();
	const { name: metaTitle, description: metaDescription } = useAppSelector(
		(state) => state.singleRocket.rocketInfo
	);

	useEffect(() => {
		dispatch(SET_SINGLE_ROCKET(singleRocketData));
	}, [singleRocketData, dispatch]);

	return (
		<>
			<Meta title={metaTitle} description={metaDescription} />

			<MainLayout>
				<RocketIntro />
				<div className="container container_margined">
					<RocketInfo />
				</div>
			</MainLayout>
		</>
	);
};

export default Rocket;

export const getStaticProps: GetStaticProps = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	try {
		const { data } = await axios.get(
			`${ROCKET_API}/${params.id}`
		);

		const singleRocketData = transformSingleRocketData(data);

		return {
			props: { singleRocketData },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await axios.get(ROCKET_API);

	const paths = data.map(({ id }: { id: number }) => ({
		params: { id: id.toString() },
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};
