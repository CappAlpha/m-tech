import { FC } from 'react';

import styles from './AboutTextSection.module.scss';

export interface Props {
  subtitle: string;
  count: number;
  description: string;
}

export const AboutTextSection: FC<Props> = ({ subtitle, count, description }) => {
  return (
    <div className={styles.aboutTextSection}>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.count}>{count}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
