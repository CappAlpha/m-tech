import { FC } from 'react';

import styles from './NavSection.module.scss';

export interface Props {
  title: string;
}

export const NavSection: FC<Props> = ({ title }) => {
  return (
    <header className={styles.root}>
      <nav className={styles.wrap}>
        <a href='#' className={styles.title}>{title}</a>
      </nav>
    </header>
  );
}
