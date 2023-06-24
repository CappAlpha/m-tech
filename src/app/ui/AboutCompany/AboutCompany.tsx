import { FC } from "react";

import styles from "./AboutCompany.module.scss";

export interface Props {
  title: string;
  subtitle: string;
  count: number;
  description: string;
}

export const AboutCompany: FC<Props> = ({ title, subtitle, count, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.count}>{count}</div>
          <div className={styles.description}>{description}</div>
        </div>
      

      <div className={styles.right}>
        <img src="" alt=""/>
        <div className={styles.review}>“Компания трансформирует понимание современной экономики и технологическую экспертизу в решения, повышающие эффективность управления и конкурентоспособность компаний в цифровую эпоху.”</div>
        <div className={styles.author}>Генеральный директор группы компаний IBS</div>
      </div>
      </div>
    </div>
  );
};
