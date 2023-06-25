import React, { FC } from "react";

import styles from "./IndexPage.module.scss";
import { HeroBlock } from "@/app/ui/HeroBlock";
import { Header } from "@/app/ui/Header";
import { aboutBlockTitle, header, heroBlock, ourDirTitle } from "./mock";
import { AboutBlock } from "@/app/ui/AboutBlock";
import { OurDirection } from "@/app/ui/OurDirection";


export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={header.tel} />
      <HeroBlock title={heroBlock.title} button={heroBlock.button} description={heroBlock.description} />
      <AboutBlock title={aboutBlockTitle.title} />
      {/* <OutProject /> */}
      <OurDirection title={ourDirTitle.title} />
    </div>
  );
};
