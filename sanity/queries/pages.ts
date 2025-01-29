import { defineQuery } from 'next-sanity'

export const SPONSORS_PAGE_QUERY = defineQuery(`
  *[_type == "sponsorsPage"][0] {
    title,
    description,
    seo {
      title,
      description,
      image,
      noIndex
    }
  }
`) 

export const SPEAKERS_PAGE_QUERY = defineQuery(`
  *[_type == "speakersPage"][0] {
    title,
    description,
    seo {
      title,
      description,
      image,
      noIndex
    }
  }
`) 

export const HOME_QUERY = defineQuery(`
  *[_type == "home"][0] {
      headerTitle,
      conferenceDate,
      location,
      registrationBanner {
          title,
          description,
          cta
      },
      lineupSection {
          text,
          cta,
          speakersCount,
          sessionsCount,
          attendeesCount
      },
      sponsorsSection {
          title,
          description,
          cta,
          sponsors[] -> {
              _id,
              name,
              logo,
          }
      },
      seo {
          title,
          description,
          image,
          noIndex
      }
  }
`);