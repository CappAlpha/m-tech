import { FC } from 'react';

import styles from './NavSection.module.scss';
import { Close } from '../shared/Icon';

export interface Props {
  title: string;
  onClickItem: () => void;
}

export const NavSection: FC<Props> = ({ title, onClickItem }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <a href='#' className={styles.title} onClick={() => onClickItem()}>
          {title}</a>
      </div>
      <div className={styles.closeBtn} onClick={() => onClickItem()}>
        <Close className={styles.closeIcon} />
      </div>
    </div>
  );
}