import type {StructureResolver} from 'sanity/structure'
import { DashboardIcon, DocumentIcon } from "@sanity/icons";
import { singleton, SINGLETONS } from './singletons';
import { isDev } from 'sanity';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
      .title("Pages")
      .icon(DocumentIcon)
      .child(
        S.list()
          .title("Pages")
          .items([
            singleton(S, SINGLETONS.home),
            singleton(S, SINGLETONS.sponsorsPage),
            singleton(S, SINGLETONS.speakersPage),
            singleton(S, SINGLETONS.ticketsPage)
          ]),
      ),

      S.divider(),

      S.documentTypeListItem('speaker'),
      S.documentTypeListItem('sponsor'),
      S.documentTypeListItem('sponsorCategory'),
      S.documentTypeListItem('ticket'),
      
      S.divider(),

      S.listItem()
      .title("Layout")
      .icon(DashboardIcon)
      .child(
        S.list()
          .title("Layout")
          .items([
            singleton(S, SINGLETONS.navbar),
            singleton(S, SINGLETONS.footer)
          ]),
      ),
    ])

const disabledSingletons = () => {
  if (!isDev) {
    return [
      ...Object.entries(SINGLETONS).map(
        ([
          /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
          key,
          value,
        ]) => value._type,
      ),
    ];
  }

  return [];
};

export const disableCreationDocumentTypes = [
  // Disable singletons document creation only in production
  ...disabledSingletons(),
];
