import { FC } from 'react';

import styles from './Ticker.module.scss';

export const Ticker: FC = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.wrap}>
        <div className={styles.tickItm}>ответственность</div>
        <div className={styles.tickItm}>результат</div>
        <div className={styles.tickItm}>честность</div>
        <div className={styles.tickItm}>ответственность</div>
        <div className={styles.tickItm}>результат</div>
        <div className={styles.tickItm}>честность</div>
        <div className={styles.tickItm}>ответственность</div>
        <div className={styles.tickItm}>результат</div>
        <div className={styles.tickItm}>честность</div>
        <div className={styles.tickItm}>ответственность</div>
      </div>
    </div>
  );
};