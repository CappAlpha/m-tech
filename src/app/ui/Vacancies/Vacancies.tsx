import { FC } from 'react';

import styles from './Vacancies.module.scss';
import { VacanciesCard } from './VacanciesCard';

interface VacanciesCards {
  title: string;
  work: string;
  link: string
}

interface Props {
  vacanciesCards: VacanciesCards[];
  title: string;
  titleAll: string;
  linkAll: string;
}

export const Vacancies: FC<Props> = ({ vacanciesCards, title, titleAll, linkAll }) => {
  return (
    <div className={styles.root} id='vacancies'>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        {vacanciesCards.map(({ title, work, link }) => (
          <VacanciesCard
            key={title}
            title={title}
            work={work}
            link={link}
          />
        ))}
        <a href={linkAll} className={styles.titleAll}>{titleAll}</a>
      </div>
    </div>
  );
};
