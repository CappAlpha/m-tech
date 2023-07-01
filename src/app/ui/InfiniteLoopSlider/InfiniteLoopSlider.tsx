import { FC } from 'react';

import styles from './InfiniteLoopSlider.module.scss';

export interface Props {
  children: Array<any>;
  duration: number;
}

export const InfiniteLoopSlider: FC<Props> = ({ children, duration }) => {
  return (
    <div
      className={styles.loopSlider}
      style={{
        '--duration': `${duration}ms`
      }}
    >
      <div className={styles.inner}>
        {children}
        {children}
      </div>
    </div>
  );
};
