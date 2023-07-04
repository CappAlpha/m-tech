import { FC } from 'react';

import styles from './Info.module.scss';


interface Info {
  title: string,
  description: string,
}

export const Info: FC<Info> = ({ title, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.textWrap}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.description}>
          {description}
        </div>
      </div>
    </div>
  )
}
