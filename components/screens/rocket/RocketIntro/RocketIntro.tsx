import React, { FC } from 'react';

import { useAppSelector } from '../../../../hooks';

import { Description } from '../../../ui/Description/Description';
import { Title } from '../../../ui/Title/Title';
import { IntroLayout } from '../../../../layout/IntroLayout';

import s from './RocketIntro.module.scss';

export const RocketIntro: FC = () => {
	const { name, image, description, company } =
		useAppSelector((state) => state.singleRocket.rocketInfo);
	return (
		<IntroLayout image={image} className={s.rocket} isFilled={false} >
			<Title view="h1" className={s.rocket__title}>
				{name}
			</Title>
			<Title
				view="h3"
				className={s.rocket__subtitle}
			>{company}</Title>
			<Description>{description}</Description>
		</IntroLayout>
	);
};
