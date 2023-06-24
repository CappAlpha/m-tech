import cn from 'classnames';
import { FC, useEffect, useRef, useState } from "react";

import styles from "./Header.module.scss";
import {
  Logo,
  HamburgerMenu,
} from '@/app/ui/shared/Icon';

const MIN_SCROLL_FOR_FIXED_HEADER = 100;

export type HeaderStyle = 'whiteBg';

interface Props {
  //header: HeaderData;
  headerStyle?: HeaderStyle;
  tel: string;
}

export const Header: FC<Props> = ({ headerStyle, tel }) => {

  const [opened, setOpened] = useState(false);
  const [fixed, setFixed] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);

  const oldScroll = useRef(0);
  //const isTablet = useTablet(false);

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

  const closeMenu = () => setOpened(false);

  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Logo className={styles.logo} alt="Logo" />
        <div className={styles.right}>
          <div className={styles.tel}>{tel}</div>
          <HamburgerMenu className={styles.hamburgerMenu} alt="Menu" />
        </div>
      </div>
    </header>
  );
}