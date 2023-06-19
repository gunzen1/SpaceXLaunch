import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Title.module.scss';

interface TitleProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	view: TitleView;
}

export const Title: FC<TitleProps> = ({ children, className, view }) => {
	switch (view) {
		case 'h1':
			return <h1 className={cn(styles.main, className)}>{children}</h1>;

		case 'h2':
			return <h2 className={cn(styles.main_big, className)}>{children}</h2>;

		case 'h3':
			return <h3 className={cn(styles.main_medium, className)}>{children}</h3>;

		default:
			return <></>;
	}
};
