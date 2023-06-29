import { FC } from 'react';

import styles from './OurProjBlock.module.scss';

export interface Props {
  title: string;


}

export const OurProjBlock: FC<Props> = ({ title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        <div className={styles.imgWrap}>
          <img className={styles.img} src='/img/ourProj/proj1.png' />
          <img className={styles.img} src='/img/ourProj/proj2.png' />
          <img className={styles.img} src='/img/ourProj/proj3.png' />
          <img className={styles.img} src='/img/ourProj/proj4.png' />
          <img className={styles.img} src='/img/ourProj/proj5.png' />
          <img className={styles.img} src='/img/ourProj/proj6.png' />
        </div>
        <div className={styles.textWrap}>
          <div className={styles.titleB}>Lorem ipsum</div>
          <div className={styles.description}>Et leo duis ut diam quam. Purus in massa tempor nec feugiat nisl pretium fusce. Lobortis feugiat vivamus at augue eget. Sit amet dictum sit amet justo donec enim. Pellentesque habitant morbi tristique senectus et netus etEt malesuada fames ac turpis egestas maecenas. Maecenas volutpat blandit aliquam etiam erat velit. A arcu cursus vitae congue. A diam maecenas sed enim ut. Condimentum mattis pellentesque id nibh tortor id. Elit sed vulputate mi sit amet mauris commodo quis. Urna duis convallis convallis tellus id interdum velit laoreet.</div>
        </div>
      </div>
    </div >
  );
};
