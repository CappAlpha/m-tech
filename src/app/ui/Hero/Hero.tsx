import { FC, useState } from "react";

import styles from "./Hero.module.scss";
import { HeroForm } from './HeroForm';
import { useBlockScroll } from '../shared/hook/useBlockScroll';

interface form {
  title: string;
  nameTitle: string;
  connectWith: string;
  tabFirst: string;
  tabSecond: string;
  emailTitle: string;
  phoneTitle: string;
  textBtn: string;
  text: string;
  link: string;
  linkText: string;
}

interface Hero {
  title: string;
  description: string;
  button: string;
}

interface Props {
  hero: Hero;
  form: form,
}

export const Hero: FC<Props> = ({ hero, form }) => {
  const [opened, setOpened] = useState(false);

  const closeForm = () => setOpened(false);

  useBlockScroll([opened]);

  return (
    <>
      <div className={styles.root}>
        <div className={styles.introBg}>
          <video className={styles.bgVideo} preload="auto" muted loop autoPlay src='/video/background-video.mp4'></video>
        </div>

        <div className={styles.wrap}>
          <div className={styles.title}>{hero.title}</div>
          <div className={styles.bottomBlock}>
            <button className={styles.button} onClick={() => setOpened(true)}>{hero.button}</button>
            <div className={styles.description}>{hero.description}</div>
          </div>
        </div>
      </div>
      <HeroForm form={form} opened={opened} onClickItem={closeForm} />
    </>
  );
};
