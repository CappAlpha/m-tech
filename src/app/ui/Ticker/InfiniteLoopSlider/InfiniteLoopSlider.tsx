import { FC } from 'react';

import styles from './InfiniteLoopSlider.module.scss';

interface Props {
  children: Array<any>;
}

export const InfiniteLoopSlider: FC<Props> = ({ children }) => {
  return (
    <div
      className={styles.root}
    >
      <div className={styles.inner}>
        {children}
        {children}
      </div>
    </div>
  );
};
