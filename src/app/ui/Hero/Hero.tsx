import { FC, useState } from "react";

import { useBlockScroll } from '../shared/hook/useBlockScroll';
import { HeroForm } from './HeroForm';

import styles from "./Hero.module.scss";

interface Hero {
  title: string;
  description: string;
  button: string;
}

interface Props {
  hero: Hero;
}

export const Hero: FC<Props> = ({ hero }) => {
  const [opened, setOpened] = useState(false);

  const closeForm = () => setOpened(false);

  useBlockScroll([opened]);

  return (
    <>
      <div className={styles.root}>
        <div className={styles.introBg}>
          <video
            className={styles.bgVideo}
            preload="auto"
            muted
            loop
            autoPlay
            src='/video/background-video.mp4'
          ></video>
        </div>

        <div className={styles.wrap}>
          <div className={styles.bottomBlock}>
            <div className={styles.title}>{hero.title}</div>
            <button className={styles.button} onClick={() => setOpened(true)}>
              {hero.button}
            </button>
            <div className={styles.descriptionMobile}>{hero.description}</div>
          </div>
          <div className={styles.description}>{hero.description}</div>
        </div>
      </div>
      <HeroForm opened={opened} onClickItem={closeForm} />
    </>
  );
};
