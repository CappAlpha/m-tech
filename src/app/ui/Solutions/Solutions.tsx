import { FC } from 'react';

import styles from './Solutions.module.scss';
import { MangazeyaDevelopment, MangazeyaGaz, MangazeyaMining, MangazeyaAgro } from '../shared/Icon';
import Link from 'next/link';

interface Solutions {
  id: number;
  file: string;
  type: string;
  video: string;
}

interface Props {
  title: string;
  solutions: Solutions[];
}

const icons: Record<string, JSX.Element> = {
  development: <MangazeyaDevelopment />,
  agro: <MangazeyaAgro />,
  mining: <MangazeyaMining />,
  production: <MangazeyaGaz />
};

export const Solutions: FC<Props> = ({ title, solutions }) => {
  return (
    <div className={styles.root} id='solutions'>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        {solutions.map(({ file, type, video, id }) => (
          <div className={styles.block} key={id}>
            <div className={styles.logo}> {icons[type]} </div>
            <video
              className={styles.video}
              src={video}
              preload="auto"
              muted
              loop
              autoPlay
            />
            <div className={styles.buttonWrap}>
              <button className={styles.button}>
                <Link
                  target='_blank'
                  href={file}
                  className={styles.presentation}
                >
                  Скачать презентацию
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};