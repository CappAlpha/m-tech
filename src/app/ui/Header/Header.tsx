import cn from 'classnames';
import { FC, useRef, useEffect, useState } from "react";

import styles from "./Header.module.scss";
import {
  Logo,
  Burger,
  Close,
} from '@/app/ui/shared/Icon';

import { useBlockScroll } from '../shared/hook/useBlockScroll';

const MIN_SCROLL_FOR_FIXED_HEADER = 120;

interface Props {
  header: Array<({ title: string, name: string })>;
  tel: string;
}

export const Header: FC<Props> = ({ tel, header }) => {
  const [opened, setOpened] = useState(false);
  const [fixed, setFixed] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);

  const oldScroll = useRef(0);
  const onClickEvents = (name: string) => {
    setOpened(false)
    document.querySelector(`#${name}`)?.scrollIntoView({ behavior: 'smooth' });
  }

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

  useBlockScroll([opened]);

  return (
    <header className={cn(styles.root, fixed && styles.fixed, !isOnTop && styles.darkened)}>
      <div className={styles.wrap}>
        <Logo className={styles.logo} />
        <div className={styles.right}>
          <div className={styles.tel}>{tel}</div>
          <Burger className={styles.burgerIcon} onClick={() => setOpened(true)} />
        </div>
      </div>

      <div className={cn(styles.navRoot, opened && styles.opened)}>
        <div className={styles.navScroll}>
          <div className={styles.navWrap}>
            {header.map(({ title, name }) => (
              <div className={styles.navItem}>
                <a className={styles.navTitle} onClick={() => onClickEvents(name)}>
                  {title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.closeBtn}
          //@ts-ignore
          onClick={() => setOpened(false)}>
          <Close className={styles.closeIcon} />
        </div>
      </div>
    </header>
  );
}