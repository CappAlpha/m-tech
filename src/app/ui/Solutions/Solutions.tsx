import { FC } from 'react';

import styles from './Solutions.module.scss';
import { MangazeyaDevelopment, MangazeyaGaz, MangazeyaMining, MangazeyaAgro } from '../shared/Icon';

interface Solutions {
  video: string;
  title: string;
  link: string;
}

interface Props {
  title: string;
  solutions: Solutions[];
}

export const Solutions: FC<Props> = ({ title, solutions }) => {
  return (
    <div className={styles.root} id='solutions'>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        <div className={styles.block}>
          <MangazeyaDevelopment className={styles.logo} />
          <video className={styles.video} src={solutions[0].video} preload="auto" muted loop autoPlay />
          <div className={styles.buttonWrap}>
            <button className={styles.button}>
              <a href={solutions[0].link} className={styles.presentation}>{solutions[0].title}</a>
            </button>
          </div>
        </div>

        <div className={styles.block}>
          <MangazeyaGaz className={styles.logo} />
          <video className={styles.video} src={solutions[1].video} preload="auto" muted loop autoPlay />
          <div className={styles.buttonWrap}>
            <button className={styles.button}>
              <a href={solutions[1].link} className={styles.presentation}>{solutions[1].title}
              </a>
            </button>
          </div>
        </div>

        <div className={styles.block}>
          <MangazeyaMining className={styles.logo} />
          <video className={styles.video} src={solutions[2].video} preload="auto" muted loop autoPlay />
          <div className={styles.buttonWrap}>
            <button className={styles.button}>
              <a href={solutions[2].link} className={styles.presentation}>{solutions[2].title}</a>
            </button>
          </div>
        </div>

        <div className={styles.block}>
          <MangazeyaAgro className={styles.logo} />
          <video className={styles.video} src={solutions[3].video} preload="auto" muted loop autoPlay />
          <div className={styles.buttonWrap}>
            <button className={styles.button}>
              <a href={solutions[3].link} className={styles.presentation}>{solutions[3].title}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};