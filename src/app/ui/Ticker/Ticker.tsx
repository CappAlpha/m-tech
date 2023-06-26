import { FC } from 'react';

import styles from './Ticker.module.scss';

export const Ticker: FC = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.wrap}>
        <div className={styles.tickItm}>честность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;результат</div>
        <div className={styles.tickItm}>честность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;результат</div>
        <div className={styles.tickItm}>честность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;результат</div>
        <div className={styles.tickItm}>честность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;результат</div>
        <div className={styles.tickItm}>честность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;результат</div>
        <div className={styles.tickItm}>честность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;результат</div>
        <div className={styles.tickItm}>честность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;результат</div>
        <div className={styles.tickItm}>честность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ответственность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;результат</div>
      </div>
    </div>
  );
};