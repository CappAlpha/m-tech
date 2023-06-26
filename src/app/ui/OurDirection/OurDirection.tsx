import { FC } from 'react';

import styles from './OurDirection.module.scss';
import { OurDirSection } from '../OurDirSection';

export interface Props {
  ourDirSection: Array<({ title: string, description: string })>;
  title: string;
}

export const OurDirection: FC<Props> = ({ title, ourDirSection }) => {
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

