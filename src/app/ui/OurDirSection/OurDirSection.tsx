import { FC } from 'react';

import styles from './OurDirSection.module.scss';

export interface Props {
  title: string;
  description: string;
}

export const OurDirSection: FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.ourDirSection}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
