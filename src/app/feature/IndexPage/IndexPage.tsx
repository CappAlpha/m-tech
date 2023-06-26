import { FC } from "react";

import styles from "./IndexPage.module.scss";
import { HeroBlock } from "@/app/ui/HeroBlock";
import { Header } from "@/app/ui/Header";
import { AboutBlock } from "@/app/ui/AboutBlock";
import { OurDirectionBlock } from "@/app/ui/OurDirectionBlock";
import { Ticker } from "@/app/ui/Ticker";
import { VacanciesBlock } from "@/app/ui/VacanciesBlock";
import { aboutBlockTitle, headerTel, navMenu, heroBlock, ourDirTitle, ourDirSection, vacanciesTitle } from "./mock";


export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={headerTel.tel} header={navMenu} />
      <HeroBlock title={heroBlock.title} button={heroBlock.button} description={heroBlock.description} />
      <AboutBlock title={aboutBlockTitle.title} />
      {/* <OutProject /> */}
      <OurDirectionBlock title={ourDirTitle.title} ourDirSection={ourDirSection} />
      <Ticker />
      <VacanciesBlock title={vacanciesTitle.title} />
    </div>
  );
};
