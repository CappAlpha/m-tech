import { FC } from "react";

import { Header } from "@/app/ui/Header";
import { Hero } from "@/app/ui/Hero";
import { About } from "@/app/ui/About";
import { Projects } from "@/app/ui/Projects";
import { Directions } from "@/app/ui/Directions";
import { Solutions } from "@/app/ui/Solutions";
import { Ticker } from "@/app/ui/Ticker";
import { Vacancies } from "@/app/ui/Vacancies";
import { Aware } from "@/app/ui/Aware";
import { Contacts } from "@/app/ui/Contacts";
import { Footer } from "@/app/ui/Footer";

import styles from "./IndexPage.module.scss";

import {
  headerTel, menuItem,
  hero,
  aboutTitle, aboutTextSection, aboutReviewSection,
  projectsTitle, projects,
  directionsTitle, directions,
  solutionsTitle, solutions,
  tickerArr,
  vacanciesTitle, vacanciesCards, vacanciesAll,
  awareTitle, awareContent,
  contactsTitle,
  footerLeft, footerRight,
} from "./mock";

export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Header tel={headerTel.tel} header={menuItem} />
      <Hero hero={hero} />
      <About title={aboutTitle.title} aboutTextSection={aboutTextSection} aboutReviewSection={aboutReviewSection} />
      <Projects title={projectsTitle.title} projects={projects} />
      <Directions title={directionsTitle.title} directions={directions} />
      <Solutions title={solutionsTitle.title} solutions={solutions} />
      <Ticker tickerArr={tickerArr} />
      <Vacancies title={vacanciesTitle.title} vacanciesCards={vacanciesCards} titleAll={vacanciesAll.title} linkAll={vacanciesAll.link} />
      <Aware title={awareTitle.title} aware={awareContent} />
      <Contacts title={contactsTitle.title} />
      <Footer footerLeft={footerLeft} footerRight={footerRight} />
    </div>
  );
};