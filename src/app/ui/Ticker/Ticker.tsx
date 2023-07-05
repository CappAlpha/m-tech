import { FC } from 'react';

import styles from './Ticker.module.scss';

import { Tag } from './Tag';
import { InfiniteLoopSlider } from './InfiniteLoopSlider';

const DURATION = 25000;
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

interface Props {
  tickerArr: Array<any>;
}

export const Ticker: FC<Props> = ({ tickerArr }) => (
  <div className={styles.root}>
    <div className={styles.tagList}>
      <InfiniteLoopSlider duration={random(DURATION - 5000, DURATION + 5000)} children={tickerArr.map((tag) => (
        <Tag text={tag} key={tag} />
      ))} />
    </div>
  </div>
);
