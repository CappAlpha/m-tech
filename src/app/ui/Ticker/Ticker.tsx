import { FC } from 'react';

import styles from './Ticker.module.scss';

import { Tag } from './Tag';
import { InfiniteLoopSlider } from './InfiniteLoopSlider';

interface Props {
  tickerArr: Array<any>;
}

export const Ticker: FC<Props> = ({ tickerArr }) => (
  <div className={styles.root}>
    <div className={styles.tagList}>
      <InfiniteLoopSlider children={tickerArr.map((tag, index) => (
        <Tag text={tag} key={index} />
      ))} />
    </div>
  </div>
);
