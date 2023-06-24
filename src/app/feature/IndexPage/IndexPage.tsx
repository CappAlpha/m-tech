import React, { FC } from "react";

import styles from "./IndexPage.module.scss";
import { HeroBlock } from "@/app/ui/HeroBlock";
import { Header } from "@/app/ui/Header";
import { aboutCompanyTitle, aboutCompany, header, heroBlock } from "./mock";
import { AboutCompany } from "@/app/ui/AboutCompany";

export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={header.tel} />
      <HeroBlock title={heroBlock.title} button={heroBlock.button} description={heroBlock.description} />
      <AboutCompany title={aboutCompanyTitle.title} subtitle={aboutCompany.subtitle} count={aboutCompany.count} description={aboutCompany.description} />
    </div>
  );
};
