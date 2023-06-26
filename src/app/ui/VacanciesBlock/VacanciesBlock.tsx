import { FC } from 'react';

import styles from './VacanciesBlock.module.scss';

export interface Props {
  title: string;
}

export const VacanciesBlock: FC<Props> = ({ title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>

      </div>
    </div>
  );
};
