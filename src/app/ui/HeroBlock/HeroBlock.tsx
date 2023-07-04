import { FC, useState } from "react";

import styles from "./HeroBlock.module.scss";
import { HeroForm } from './HeroForm';
import { useBlockScroll } from '../shared/hook/useBlockScroll';

export interface Props {
  title: string;
  description: string;
  button: string;
  formTitle: string;
  formPolicy: string;
  formPolicyLink: string;
  formLinkText: string;
}

export const HeroBlock: FC<Props> = ({ title, button, description, formTitle, formPolicy, formPolicyLink, formLinkText }) => {
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
          <div className={styles.title}>{title}</div>
          <div className={styles.bottomBlock}>
            <button className={styles.button} onClick={() => setOpened(true)}>{button}</button>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
      <HeroForm title={formTitle} text={formPolicy} link={formPolicyLink} linkText={formLinkText} opened={opened} onClickItem={closeForm} />
    </>
  );
};
