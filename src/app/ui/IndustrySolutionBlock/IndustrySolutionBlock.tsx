import { FC } from 'react';

import styles from './IndustrySolutionBlock.module.scss';
import { MangazeyaDevelopment, MangazeyaGaz, MangazeyaMining, MangazeyaAgro } from '../shared/Icon';

export interface Props {
  title: string;
}

export const IndustrySolutionBlock: FC<Props> = ({ title }) => {
  return (
    <div className={styles.root} id='solutions'>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        <div className={styles.block}><MangazeyaDevelopment className={styles.logo} /> <img className={styles.img} src='/img/industrySolution/agro.jpg' /></div>
        <div className={styles.block}><MangazeyaGaz className={styles.logo} /><img className={styles.img} src='/img/industrySolution/agro.jpg' /></div>
        <div className={styles.block}><MangazeyaMining className={styles.logo} /><img className={styles.img} src='/img/industrySolution/agro.jpg' /></div>
        <div className={styles.block}><MangazeyaAgro className={styles.logo} /><img className={styles.img} src='/img/industrySolution/agro.jpg' /></div>
      </div>
    </div >
  );
};