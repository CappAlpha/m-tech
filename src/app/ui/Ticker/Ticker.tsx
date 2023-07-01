import { FC } from 'react';
import { Tag } from '../Tag';
import styles from './Ticker.module.scss';
import { number } from 'yup';

const DURATION = 25000;

min: number;

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

const InfiniteLoopSlider = ({ children, duration }) => {
  return (
    <div
      className={styles.loopSlider}
      style={{
        '--duration': `${duration}ms`,
      }}
    >
      <div className={styles.inner}>
        {children}
        {children}
      </div>
    </div>
  );
};

interface Props {
  tickerArr: Array<any>;
  ticker: Array<({
    tag: string;
    wordFirst: string,
    wordSecond: string,
    wordThird: string
  })>;
  wordFirst: string;
  wordSecond: string;
  wordThird: string;
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
