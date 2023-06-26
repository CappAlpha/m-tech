import cn from 'classnames';
import { FC, useRef, useEffect, useState } from "react";

import styles from "./Header.module.scss";
import {
  Logo,
  Burger,
  Close,
} from '@/app/ui/shared/Icon';

import { NavSection } from '../NavSection';

const MIN_SCROLL_FOR_FIXED_HEADER = 100;

interface Props {
  header: Array<({ title: string })>;
  tel: string;
}

export const Header: FC<Props> = ({ tel, header }) => {

  const [opened, setOpened] = useState(false);
  const [fixed, setFixed] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);

  const oldScroll = useRef(0);
  const closeMenu = () => setOpened(false);

  const onScroll = () => {
    const scrollTop = window.scrollY;

    if (opened) {
      oldScroll.current = scrollTop;
      return;
    }

    if (oldScroll.current > scrollTop || scrollTop < MIN_SCROLL_FOR_FIXED_HEADER) {
      setFixed(true);
    } else {
      setFixed(false);
    }

    setIsOnTop(scrollTop < MIN_SCROLL_FOR_FIXED_HEADER);

    oldScroll.current = scrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [opened]);

  return (
    <header className={cn(styles.root, fixed && styles.fixed, !isOnTop && styles.darkened)}>
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