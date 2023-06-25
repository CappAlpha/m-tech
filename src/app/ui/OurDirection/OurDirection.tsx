import { FC } from 'react';

import styles from './OurDirection.module.scss';
import { ourDirSection } from '@/app/feature/IndexPage/mock';
import { OurDirSection } from '../OurDirSection';

export interface Props {
  title: string;
}

export const OurDirection: FC<Props> = ({ title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        {ourDirSection.map(({ title, description }) => (
          <OurDirSection
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

