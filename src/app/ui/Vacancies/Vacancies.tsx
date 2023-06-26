import { FC } from 'react';

import styles from './Vacancies.module.scss';

export interface Props {
  title: string;
}

export const Vacancies: FC<Props> = ({ title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>

      </div>
    </div>
  );
};
