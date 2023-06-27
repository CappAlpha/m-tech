import { FC } from 'react';

import styles from './VacanciesBlock.module.scss';
import { VacanciesCard } from '../VacanciesCard';

export interface Props {
  vacanciesCards: Array<({ title: string, work: string, link: string })>;
  title: string;
  titleAll: string;
  linkAll: string;
}

export const VacanciesBlock: FC<Props> = ({ vacanciesCards, title, titleAll, linkAll }) => {
  return (
    <div className={styles.root}>
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
