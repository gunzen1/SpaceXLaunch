import { FC } from 'react';

import { renderText } from '../../../../utils/';
import { useAppSelector } from '../../../../hooks';
import { Tag, Title } from '../../../../components';

import PayloadIcon from '/public/icons/payload-icon.svg';
import RocketIcon from '/public/icons/rocket-icon.svg';
import SpecificationIcon from '/public/icons/spec-icon.svg';

import styles from './RocketInfo.module.scss';

export const RocketInfo: FC = () => {
	const {
		height,
		diameter,
		mass,
		legs_info,
		name,
		type,
		active,
		stages,
		boosters,
		cost_per_launch,
		success_rate,
		engines_info,
		first_flight,
		country,
		company,
		wikipedia,
		description,
		id
	} = useAppSelector((state) => state.singleRocket.rocketInfo);

	return (
		<section className={styles.info}>
			<div className={styles.info__tags}>
				<Tag gradient className={styles.info__tag}>
					{renderText(company)}
				</Tag>
				<Tag gradient className={styles.info__tag}>
					{renderText(type)}
				</Tag>
				<Tag>{renderText(country)}</Tag>
			</div>

			<div className={styles.feature}>
				<div className={styles.feature__item}>
					<RocketIcon />
					<Title view="h3" className={styles.feature__item__title}>
						Общие сведения
					</Title>
					<ul>
						<li>
							Имя <span>{renderText(name)}</span>
						</li>
						<li>
							Первый полет 
							<span>{renderText(first_flight)}</span>
						</li>
						<li>
							Стоимость 1 полета
							<span className={styles.feature__item__value}>
								{renderText(cost_per_launch)}
							</span>
						</li>
					</ul>
				</div>

				<div className={styles.feature__item}>
					<SpecificationIcon />
					<Title view="h3" className={styles.feature__item__title}>
						Спецификации
					</Title>
					<ul>
						<li>
							Стадий 
							<span>{renderText(stages)}</span>
						</li>
						<li>
							Высота 
							<span>{renderText(height, 'м')}</span>
						</li>
						<li>
							Диаметр
							<span>{renderText(diameter, 'м')}</span>
						</li>
						<li>
							Масса
							<span>{renderText(mass, 'кг')}</span>
						</li>
						<li>
							Посадочные ноги
							<span>{renderText(legs_info)}</span>
						</li>
					</ul>
				</div>

				<div className={styles.feature__item}>
					<PayloadIcon />
					<Title view="h3" className={styles.feature__item__title}>
						Мощность
					</Title>
					<ul>
						<li>
							Бустеры
							<span className={styles.feature__item__value}>
								{renderText(boosters)}
							</span>
						</li>
						<li>
							Двигатели
							<span className={styles.feature__item__value}>
								{renderText(engines_info)}
							</span>
						</li>
						<li>
							Успешных запусков (%)
							<span className={styles.feature__item__value}>
								{renderText(success_rate)}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
