import { FC } from 'react';

import styles from './OurDirectionBlock.module.scss';
import { OurDirSection } from '../OurDirSection';

export interface Props {
  ourDirSection: Array<({ title: string, description: string })>;
  title: string;
}

export const OurDirectionBlock: FC<Props> = ({ title, ourDirSection }) => {
  return (
    <div className={styles.root} id='directions'>
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

