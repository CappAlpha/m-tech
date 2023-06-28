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
import { FooterBlock } from "@/app/ui/FooterBlock";

import { headerTel, navMenu, heroBlock, aboutBlockTitle, aboutReviewSection, ourProjTitle, ourProjContent, ourDirTitle, ourDirSection, IndustrySolutionTitle, vacanciesTitle, vacanciesCards, vacanciesAll, footerBlockLeft, footerBlockRight } from "./mock";


export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={headerTel.tel} header={navMenu} />
      <HeroBlock title={heroBlock.title} button={heroBlock.button} description={heroBlock.description} />
      <AboutBlock title={aboutBlockTitle.title} logo={aboutReviewSection.logo} review={aboutReviewSection.review} nameA={aboutReviewSection.nameA} titleA={aboutReviewSection.titleA} />
      <OurProjBlock title={ourProjTitle.title} />
      <OurDirectionBlock title={ourDirTitle.title} ourDirSection={ourDirSection} />
      <IndustrySolutionBlock title={IndustrySolutionTitle.title} />
      <Ticker />
      <VacanciesBlock title={vacanciesTitle.title} vacanciesCards={vacanciesCards} titleAll={vacanciesAll.title} linkAll={vacanciesAll.link} />
      <FooterBlock title={footerBlockLeft.title} company={footerBlockLeft.company} include={footerBlockLeft.include} address={footerBlockLeft.address} tel={footerBlockLeft.tel} fax={footerBlockLeft.fax} mailTitle={footerBlockLeft.mailTitle} mail={footerBlockLeft.mail} data={footerBlockRight.data} linkData={footerBlockRight.linkData} info={footerBlockRight.info} linkInfo={footerBlockRight.linkInfo} map={footerBlockRight.map} linkMap={footerBlockRight.linkMap} policy1={footerBlockRight.policy1} policy2={footerBlockRight.policy2} />
    </div>
  );
};
