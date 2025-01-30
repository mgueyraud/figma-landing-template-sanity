import { SEO } from "./seo";

export interface Question {
  _key: string;
  questionText: string;
  answerText: string;
}

export interface Tab {
  _key: string;
  tabName: string;
  tabTitle: string;
  questions: Question[];
}

export interface ContactUsCta {
  displayText: string;
  url: string;
}

export interface FaqPage {
  pageTitle: string;
  tabs: Tab[];
  contactUsDescription: string;
  contactUsCta: ContactUsCta;
  seo: SEO
}

