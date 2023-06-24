import React, { FC } from "react";

import styles from "./IndexPage.module.scss";
import { HeroBlock } from "@/app/ui/HeroBlock";
import { Header } from "@/app/ui/Header";
import { aboutBlockTitle, aboutBlock, header, heroBlock } from "./mock";
import { AboutBlock } from "@/app/ui/AboutBlock";


export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={header.tel} />
      <HeroBlock title={heroBlock.title} button={heroBlock.button} description={heroBlock.description} />
      <AboutBlock title={aboutBlockTitle.title} subtitle={aboutBlock.subtitle} count={aboutBlock.count} description={aboutBlock.description} />
    </div>
  );
};
