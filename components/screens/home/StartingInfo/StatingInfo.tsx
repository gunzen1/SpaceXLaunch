import React from 'react';
import Image from 'next/image';


import { Description, Title } from '../../..';
import { IntroLayout } from '../../../../layout';
import UFO from '../../../../public/images/ufo.png';


import s from './StartingInfo.module.scss';


export const StartingInfo = () => {
	return (
		<IntroLayout textAlignLeft>
			<div className={s.main}>
				<div>
					<Title view="h1" className={s.title}>
						Космические полёты
					</Title>
					<Description className={s.description}>
						— путешествия или транспортировка в или через космос. Чёткая граница между Землёй и космосом отсутствует, и Международной авиационной федерацией была принята границей высота в 100 км от поверхности Земли (линия Кармана). Чтобы на такой высоте летательный аппарат летел благодаря действию аэродинамических сил, необходимо иметь первую космическую скорость
					</Description>
					<Title view="h3" className={s.title}>
						Space Exploration Technologies Corporation
					</Title>
					<Description className={s.description}>
						— американская компания, производитель космической техники. Основана в 2002 году прежним акционером PayPal и CEO Tesla Motors Илоном Маском с целью сократить расходы на полёты в космос для открытия пути к колонизации Марса.
					</Description>
				</div>
				<div className={s.image}>
					<Image src={UFO} alt='space ships'></Image>
				</div>
			</div>
		</IntroLayout>
	);
};
