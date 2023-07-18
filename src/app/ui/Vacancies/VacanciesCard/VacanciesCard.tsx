import Link from 'next/link';
import { FC } from 'react';

import styles from './VacanciesCard.module.scss';

interface Props {
  title: string;
  type?: string;
  url: string;
}

export const VacanciesCard: FC<Props> = ({ title, type, url }) => {
  return (
    <Link target='_blank' href={url} className={styles.root}>
      <div className={styles.title}>{title}</div>
      {type && <div className={styles.work}>{type}</div>}
    </Link>
  );
};
