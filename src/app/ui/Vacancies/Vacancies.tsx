import Link from 'next/link';
import { FC } from 'react';

import { VacanciesCard } from './VacanciesCard';

import styles from './Vacancies.module.scss';

interface VacanciesCards {
  id: number;
  title: string;
  type: string;
  url: string
}

interface Props {
  vacanciesCards: VacanciesCards[];
  title: string;
}

export const Vacancies: FC<Props> = ({ vacanciesCards, title }) => {
  const cardsWithoutLast = vacanciesCards.slice(0, vacanciesCards.length - 1);
  const lastCard = vacanciesCards[vacanciesCards.length - 1];
  return (
    <div className={styles.root} id='vacancies'>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        {cardsWithoutLast.map(({ id, title, type, url }) => (
          <VacanciesCard key={id} title={title} type={type} url={url}
          />
        ))}
        <Link target='blank' href={lastCard.url} className={styles.titleAll}>
          {lastCard.title}
        </Link>
      </div>
    </div>
  );
};
