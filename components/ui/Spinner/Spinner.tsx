import { FC } from 'react';
import cn from 'classnames';

import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  return (
    <div className={cn(styles.main)}>
      <div className={cn(styles['lds-default'])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={cn(styles.title)}>Загрузка</div>
    </div>
  );
};
