import type {StructureBuilder} from "sanity/structure";

type Singleton = {
  _type: string;
  icon?: unknown;
  title: string;
};

export const SINGLETONS = {
  home: {
    title: 'Home',
    _type: 'home',
  },
  sponsorsPage: {
    title: 'Sponsors Page',
    _type: 'sponsorsPage',
  },
  speakersPage: {
    title: 'Speakers Page',
    _type: 'speakersPage',
  },
  ticketsPage: {
    title: 'Tickets Page',
    _type: 'ticketsPage',
  },
  navbar: {
    title: 'Navigation',
    _type: 'navbar',
  },
  footer: {
    title: 'Footer',
    _type: 'footer',
  },
} as const;

export const singletonsTypes = new Set(
  Object.values(SINGLETONS).map((singleton) => singleton._type),
);

// Defines actions that should be available for singleton documents
export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);

export const singleton = (S: StructureBuilder, singleton: Singleton) =>
  S.documentTypeListItem(singleton._type).child(
    S.document()
      .title(singleton.title)
      .schemaType(singleton._type)
      .views([S.view.form()]),
  );