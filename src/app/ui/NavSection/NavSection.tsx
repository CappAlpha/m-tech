import { FC } from 'react';

import styles from './NavSection.module.scss';

export interface Props {
  title: string;
  onClickItem: () => void;
}

export const NavSection: FC<Props> = ({ title }) => {
  return (
    <div className={styles.root}>
      <nav className={styles.wrap}>
        <a href='#' className={styles.title}>{title}</a>
      </nav>
    </div>
  );
}
