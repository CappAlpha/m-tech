import { FC } from "react";

import styles from "./AboutBlock.module.scss";

import { aboutTextSection } from "@/app/feature/IndexPage/mock";
import { AboutTextSection } from "../AboutSectionText";

export interface Props {
  title: string;

  logo: string;
  review: string;
  nameA: string;
  titleA: string;
}

export const AboutBlock: FC<Props> = ({ title, logo, review, nameA, titleA }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        <div className={styles.left}>
          {aboutTextSection.map(({ subtitle, count, description }) => (
            <AboutTextSection
              key={subtitle}
              subtitle={subtitle}
              count={count}
              description={description}
            />
          ))}
        </div>


        <div className={styles.right}>
          <img src={logo} />
          <div className={styles.review}>{review}</div>
          <div className={styles.name}>{nameA}</div>
          <div className={styles.titleA}>{titleA}</div>
        </div>
      </div>
    </div>
  );
};
