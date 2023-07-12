import { FC } from 'react';

import styles from './VacanciesCard.module.scss';
import Link from 'next/link';

interface Props {
  title: string;
  work: string;
  link: string;
}

export const VacanciesCard: FC<Props> = ({ title, work, link }) => {
  return (
    <Link target='_blank' href={link} className={styles.root}>
      <div className={styles.title}>{title}</div>
      <div className={styles.work}>{work}</div>
    </Link>
  );
};
