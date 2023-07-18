import { FC } from 'react';

import { InfiniteLoopSlider } from './InfiniteLoopSlider';
import { Tag } from './Tag';

import styles from './Ticker.module.scss';

interface Props {
  tickerArr: Array<string>;
}

export const Ticker: FC<Props> = ({ tickerArr }) => (
  <div className={styles.root}>
    <div className={styles.tagList}>
      <InfiniteLoopSlider
        children={tickerArr.map((tag, index) => (
          <Tag text={tag} key={index} />
        ))}
      />
    </div>
  </div>
);
