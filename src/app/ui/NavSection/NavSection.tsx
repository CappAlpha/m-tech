import cn from 'classnames';
import { FC } from 'react';

import styles from './NavSection.module.scss';
import { Close } from '../shared/Icon';

export interface Props {
  title: string;
  opened: boolean;
  onClickItem: () => void;
}

export const NavSection: FC<Props> = ({ title, opened, onClickItem }) => {
  return (
    <div className={cn(styles.root, opened && styles.opened)}>
      <nav className={styles.wrap}>
        <a href='#' className={styles.title} onClick={() => onClickItem()}>
          {title}</a>
      </nav>
      <div className={styles.closeBtn} onClick={() => onClickItem()}>
        <Close className={styles.closeIcon} />
      </div>
    </div>
  );
}