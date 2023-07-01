import { FC } from "react";
import styles from "./IndexPage.module.scss";

import { HeroBlock } from "@/app/ui/HeroBlock";
import { Header } from "@/app/ui/Header";
import { AboutBlock } from "@/app/ui/AboutBlock";
import { OurProjBlock } from "@/app/ui/OurProjBlock";
import { OurDirectionBlock } from "@/app/ui/OurDirectionBlock";
import { IndustrySolutionBlock } from "@/app/ui/IndustrySolutionBlock";
import { Ticker } from "@/app/ui/Ticker";
import { VacanciesBlock } from "@/app/ui/VacanciesBlock";
import { Footer } from "@/app/ui/Footer";

import { headerTel, navMenu, heroBlock, aboutBlockTitle, aboutReviewSection, ourProjTitle, ourProjContent, ourDirTitle, ourDirSection, IndustrySolutionTitle, ticker, vacanciesTitle, vacanciesCards, vacanciesAll, footerLeft, footerRight, tickerArr } from "./mock";


export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={headerTel.tel} header={navMenu} />
      <HeroBlock title={heroBlock.title} button={heroBlock.button} description={heroBlock.description} />
      <AboutBlock title={aboutBlockTitle.title} logo={aboutReviewSection.logo} review={aboutReviewSection.review} nameA={aboutReviewSection.nameA} titleA={aboutReviewSection.titleA} />
      <OurProjBlock title={ourProjTitle.title} />
      <OurDirectionBlock title={ourDirTitle.title} ourDirSection={ourDirSection} />
      <IndustrySolutionBlock title={IndustrySolutionTitle.title} />
      <Ticker tickerArr={tickerArr} wordFirst={ticker.wordFirst} wordSecond={ticker.wordSecond} wordThird={ticker.wordThird} />
      <VacanciesBlock title={vacanciesTitle.title} vacanciesCards={vacanciesCards} titleAll={vacanciesAll.title} linkAll={vacanciesAll.link} />
      <Footer title={footerLeft.title} company={footerLeft.company} include={footerLeft.include} address={footerLeft.address} tel={footerLeft.tel} fax={footerLeft.fax} mailTitle={footerLeft.mailTitle} mail={footerLeft.mail} data={footerRight.data} linkData={footerRight.linkData} info={footerRight.info} linkInfo={footerRight.linkInfo} map={footerRight.map} linkMap={footerRight.linkMap} policyFirst={footerRight.policyFirst} policySecond={footerRight.policySecond} />
    </div>
  );
};
