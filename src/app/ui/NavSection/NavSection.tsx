import { FC } from 'react';

import styles from './NavSection.module.scss';
import { Close } from '../shared/Icon';

export interface Props {
  title: string;
  name: string;
  onClickItem: (name: string) => void;
  onCloseItem: () => void;
}

export const NavSection: FC<Props> = ({ title, name, onClickItem, onCloseItem }) => {


  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <a className={styles.title} onClick={() => onClickItem(name)}>
          {title}</a>
      </div>
      <div className={styles.closeBtn} onClick={() => onCloseItem()}>
        <Close className={styles.closeIcon} />
      </div>
    </div>
  );
}