import { FC } from "react";

import styles from "./IndexPage.module.scss";
import { HeroBlock } from "@/app/ui/HeroBlock";
import { Header } from "@/app/ui/Header";
import { AboutBlock } from "@/app/ui/AboutBlock";
import { OurDirection } from "@/app/ui/OurDirection";
import { Ticker } from "@/app/ui/Ticker";
import { aboutBlockTitle, header, navMenu, heroBlock, ourDirTitle, ourDirSection } from "./mock";

export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={header.tel} header={navMenu} />
      <HeroBlock title={heroBlock.title} button={heroBlock.button} description={heroBlock.description} />
      <AboutBlock title={aboutBlockTitle.title} />
      {/* <OutProject /> */}
      <OurDirection title={ourDirTitle.title} ourDirSection={ourDirSection} />
      <Ticker />
    </div>
  );
};
