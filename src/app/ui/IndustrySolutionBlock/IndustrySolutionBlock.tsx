import { FC } from 'react';

import styles from './IndustrySolutionBlock.module.scss';
import { MangazeyaDevelopment, MangazeyaGaz, MangazeyaMining, MangazeyaAgro } from '../shared/Icon';

export interface Props {
  title: string;
  imgFirst?: string;
  imgSecond?: string;
  imgThird?: string;
  imgFourth?: string;
  titleFirst: string;
  linkFirst: string;
  titleSecond: string;
  linkSecond: string;
  titleThird: string;
  linkThird: string;
  titleFourth: string;
  linkFourth: string;
}

export const IndustrySolutionBlock: FC<Props> = ({ title, imgFirst, imgSecond, imgThird, imgFourth, titleFirst, linkFirst, titleSecond, linkSecond, titleThird, linkThird, titleFourth, linkFourth }) => {
  return (
    <div className={styles.root} id='solutions'>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        <div className={styles.block}>
          <MangazeyaDevelopment className={styles.logo} />
          <img className={styles.img} src={imgFirst} />
          <div className={styles.buttonWrap}>
            <button className={styles.button}>
              <a href={linkFirst} className={styles.presentation}>{titleFirst}</a>
            </button>
          </div>
        </div>

        <div className={styles.block}>
          <MangazeyaGaz className={styles.logo} />
          <img className={styles.img} src={imgSecond} />
          <div className={styles.buttonWrap}>
            <button className={styles.button}>
              <a href={linkSecond} className={styles.presentation}>{titleSecond}
              </a>
            </button>
          </div>
        </div>

        <div className={styles.block}>
          <MangazeyaMining className={styles.logo} />
          <img className={styles.img} src={imgThird} />
          <div className={styles.buttonWrap}>
            <button className={styles.button}>
              <a href={linkThird} className={styles.presentation}>{titleThird}</a>
            </button>
          </div>
        </div>

        <div className={styles.block}>
          <MangazeyaAgro className={styles.logo} />
          <img className={styles.img} src={imgFourth} />
          <div className={styles.buttonWrap}>
            <button className={styles.button}>
              <a href={linkFourth} className={styles.presentation}>{titleFourth}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};