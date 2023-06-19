import cn from 'classnames';
import Image from 'next/image';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import introImage from '../public/images/intro.jpg';

import s from './IntroLayout.module.scss';

interface IntroLayoutProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string | undefined;
	isFilled?: boolean;
	textAlignLeft?: boolean;
}

export const IntroLayout: FC<IntroLayoutProps> = ({
	children,
	image,
	className,
	isFilled = true,
	textAlignLeft,
}) => {
	return (
		<div className={s.intro}>
			<Image
				src={image || introImage}
				layout="fill"
				objectFit={isFilled ? "cover" : "contain"}
				objectPosition="center"
				alt="main page picture"
				className={s.intro__bg}
			/>
			<div className="container intro">
				<div
					className={cn(s.intro__content, className, {
						[s.home]: textAlignLeft,
					})}
				>
					{children}
				</div>
			</div>
		</div>
	);
};
