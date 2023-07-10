import { FC } from 'react';

import styles from './Aware.module.scss';

export interface Props {
  title: string;
}

export const Aware: FC<Props> = ({ title }) => {
  return (
    <div className={styles.root} id="aware">
      <div className={styles.title}>{title}</div>



    </div>
  );
};
