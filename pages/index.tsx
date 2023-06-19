import { StartingInfo, Meta } from '../components';


import { MainLayout } from '../layout/';


const Home = () => {
	return (
		<>
			<Meta
				title="Основная информация"
				description="Single page application with React, Redux, Next.js"
			/>
			<MainLayout>
				<StartingInfo />
			</MainLayout>
		</>
	);
};

export default Home;