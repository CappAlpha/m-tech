import cn from 'classnames';
import { FC, useState } from "react";

import styles from "./HeroBlock.module.scss";
import { HeroForm } from '../HeroForm';
import { Close } from '../shared/Icon';
import { useBlockScroll } from '../shared/hook/useBlockScroll';

export interface Props {
  title: string;
  description: string;
  button: string;
}

export const HeroBlock: FC<Props> = ({ title, button, description }) => {
  const [opened, setOpened] = useState(false);

  useBlockScroll([opened]);

  return (
    <div className={styles.root}>
      <div className={styles.introBg}>
        <video className={styles.bgVideo} preload="auto" muted loop autoPlay src='/video/background-video.mp4'></video>
      </div>

      <div className={styles.wrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.bottomBlock}>
          <button className={styles.button} onClick={() => setOpened(true)}>{button}</button>
          <div className={styles.description}>{description}</div>
        </div>
      </div>

      {/* сделать всё это в хиро блоке */}
      <div className={cn(styles.form, opened && styles.opened)}>
        <HeroForm />
        <div className={styles.closeBtn} onClick={() => setOpened(false)}>
          <Close className={styles.closeIcon} />
        </div>
      </div>
    </div>
  );
};
