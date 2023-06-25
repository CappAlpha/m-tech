import { FC } from "react";

import styles from "./AboutBlock.module.scss";

import { aboutTextSection } from "@/app/feature/IndexPage/mock";
import { AboutTextSection } from "../AboutSectionText";

export interface Props {
  title: string;
}

export const AboutBlock: FC<Props> = ({ title }) => {
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
          <img src="" alt="" />
          <div className={styles.review}>“Компания трансформирует понимание современной экономики и технологическую экспертизу в решения, повышающие эффективность управления и конкурентоспособность компаний в цифровую эпоху.”</div>
          <div className={styles.author}>Григорий Кочаров</div>
          <div className={styles.title}>Генеральный директор группы компаний IBS</div>
        </div>
      </div>
    </div>
  );
};
