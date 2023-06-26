import cn from 'classnames';
import { FC, useState } from "react";

import styles from "./Header.module.scss";
import {
  Logo,
  Burger,
  Close,
} from '@/app/ui/shared/Icon';

import { NavSection } from '../NavSection';

interface Props {
  header: Array<({ title: string })>;
  tel: string;
}

export const Header: FC<Props> = ({ tel, header }) => {

  const [opened, setOpened] = useState(false);

  const closeMenu = () => setOpened(false);

  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <Logo className={styles.logo} />
        <div className={styles.right}>
          <div className={styles.tel}>{tel}</div>
          <Burger className={styles.burgerIcon} onClick={() => setOpened(true)} />
        </div>
      </div>
      <div className={cn(styles.nav, opened && styles.opened)}>
        {header.map(({ title }) => (
          <NavSection
            key={title}
            title={title}
            onClickItem={closeMenu}
          />
        ))}
        <div className={styles.closeBtn} onClick={() => setOpened(false)}>
          <Close className={styles.closeIcon} />
        </div>
      </div>
    </header>
  );
}