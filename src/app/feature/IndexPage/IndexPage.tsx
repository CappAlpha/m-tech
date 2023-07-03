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

import {
  headerTel, navMenu,
  heroBlock,
  form,
  aboutBlockTitle, aboutReviewSection, ourProjTitle, ourProjContent, ourDirTitle, ourDirSection, IndustrySolutionTitle, IndustrySolutionImages,
  IndustrySolutionPresentation,
  tickerArr,
  vacanciesTitle, vacanciesCards, vacanciesAll,
  footerLeft, footerRight
} from "./mock";


export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={headerTel.tel} header={navMenu} />
      <HeroBlock title={heroBlock.title} button={heroBlock.button} description={heroBlock.description} formTitle={form.title} formPolicy={form.text} formPolicyLink={form.link} formLinkText={form.linkText} />
      <AboutBlock title={aboutBlockTitle.title} img={aboutReviewSection.img} review={aboutReviewSection.review} nameA={aboutReviewSection.nameA} titleA={aboutReviewSection.titleA} />
      <OurProjBlock title={ourProjTitle.title} ourProjContent={ourProjContent} />
      <OurDirectionBlock title={ourDirTitle.title} ourDirSection={ourDirSection} />
      <IndustrySolutionBlock title={IndustrySolutionTitle.title}
        titleFirst={IndustrySolutionPresentation.titleFirst}
        linkFirst={IndustrySolutionPresentation.linkFirst}
        titleSecond={IndustrySolutionPresentation.titleSecond}
        linkSecond={IndustrySolutionPresentation.linkSecond}
        titleThird={IndustrySolutionPresentation.titleThird}
        linkThird={IndustrySolutionPresentation.linkThird}
        titleFourth={IndustrySolutionPresentation.titleFourth}
        linkFourth={IndustrySolutionPresentation.linkFourth}
        imgFirst={IndustrySolutionImages.imgFirst} imgSecond={IndustrySolutionImages.imgSecond} imgThird={IndustrySolutionImages.imgThird} imgFourth={IndustrySolutionImages.imgFourth} />
      <Ticker tickerArr={tickerArr} />
      <VacanciesBlock title={vacanciesTitle.title} vacanciesCards={vacanciesCards} titleAll={vacanciesAll.title} linkAll={vacanciesAll.link} />
      <Footer title={footerLeft.title} company={footerLeft.company} include={footerLeft.include} address={footerLeft.address} tel={footerLeft.tel} fax={footerLeft.fax} mailTitle={footerLeft.mailTitle} mail={footerLeft.mail} data={footerRight.data} linkData={footerRight.linkData} info={footerRight.info} linkInfo={footerRight.linkInfo} />
    </div>
  );
};
