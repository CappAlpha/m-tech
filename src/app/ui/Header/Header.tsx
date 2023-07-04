import cn from 'classnames';
import { FC, useRef, useEffect, useState } from "react";

import styles from "./Header.module.scss";
import {
  Logo,
  Burger,
} from '@/app/ui/shared/Icon';

import { NavSection } from '../NavSection';
import { useBlockScroll } from '../shared/hook/useBlockScroll';

const MIN_SCROLL_FOR_FIXED_HEADER = 90;

export type HeaderStyle = 'blueBg';

interface Props {
  header: Array<({ title: string, name: string })>;
  tel: string;
  headerStyle?: HeaderStyle;
}

export const Header: FC<Props> = ({ tel, header, headerStyle }) => {

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
      <div className={cn(styles.header, headerStyle === 'blueBg' && styles.blueBg)}>
        <div className={styles.wrap}>
          <Logo className={styles.logo} />
          <div className={styles.right}>
            <div className={styles.tel}>{tel}</div>
            <Burger className={styles.burgerIcon} onClick={() => setOpened(true)} />
          </div>
        </div>

        <div className={cn(styles.navWrap, opened && styles.opened)}>
          {header.map(({ title, name }) => (
            <NavSection
              title={title}
              name={name}
              onClickItem={onClickEvents}
            />
          ))}
        </div>
      </div>
    </header>
  );
}