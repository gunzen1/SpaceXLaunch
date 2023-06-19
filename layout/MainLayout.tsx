import React, { FC, ReactNode } from 'react';
import {useRouter} from 'next/router';

import { Footer, Header } from '../components';

export interface MainLayoutProps {
	children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const params = useRouter();

	return (
		<>
			<Header path={params.pathname} />
			<main>{children}</main>
			<Footer path={params.pathname} />
		</>
	);
};
