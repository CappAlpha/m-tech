import { FC } from 'react';

import styles from './VacanciesCard.module.scss';

interface Props {
  title: string;
  work: string;
  link: string;
}

export const VacanciesCard: FC<Props> = ({ title, work, link }) => {
  return (
    <a href={link} className={styles.root}>
      <div className={styles.title}>{title}</div>
      <div className={styles.work}>{work}</div>
    </a>
  );
};
