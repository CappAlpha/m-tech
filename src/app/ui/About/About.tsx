import { FC } from "react";

import styles from "./About.module.scss";

import { AboutTextSection } from "./AboutTextSection";

interface aboutTextSection {
  subtitle: string;
  count: number;
  description: string;
}

interface aboutReviewSection {
  img: string;
  review: string;
  name: string;
  title: string;
}

interface Props {
  title: string;
  aboutTextSection: aboutTextSection[];
  aboutReviewSection: aboutReviewSection;
}

export const About: FC<Props> = ({ title, aboutTextSection, aboutReviewSection }) => {
  return (
    <div className={styles.root} id="about">
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
          <img className={styles.img} src={aboutReviewSection.img} />
          <div className={styles.review}>{aboutReviewSection.review}</div>
          <div className={styles.name}>{aboutReviewSection.name}</div>
          <div className={styles.titleA}>{aboutReviewSection.title}</div>
        </div>
      </div>
    </div>
  );
};
