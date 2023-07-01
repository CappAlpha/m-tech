import { FC } from 'react';

import styles from './OurProjBlock.module.scss';
import { OurProjSection } from '../OurProjSection';

export interface Props {
  title: string;
  ourProjContent: Array<({ img?: string, title: string, description: string, first: boolean })>
}

export const OurProjBlock: FC<Props> = ({ title, ourProjContent }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>


      <div className={styles.wrap}>
        {ourProjContent.map(({ img, title, description, first }) => (
          <OurProjSection key={title} img={img} title={title} description={description} first={first} />
        ))}
      </div>
    </div>
  );
};