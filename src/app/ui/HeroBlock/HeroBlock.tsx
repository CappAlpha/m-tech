import { FC } from "react";

import styles from "./HeroBlock.module.scss";

export interface Props {
  title: string;
  description: string;
  button: string;
}

export const HeroBlock: FC<Props> = ({ title, button, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.introBg}><video preload="auto" muted loop src='/assets/video/heroBlock/backgroundVideo.mp4' autoPlay></video></div>   

      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.bottomBlock}>
          <button className={styles.button}>{button}</button>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};
