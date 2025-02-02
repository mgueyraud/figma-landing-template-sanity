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

export const TICKETS_PAGE_QUERY = defineQuery(`*[_type == "ticketsPage"][0] {
  title,
  sections[] {
    _key,
    title,
    tickets[]-> {
      _id,
      title,
      description,
      currentPrice,
      hasDiscount,
      originalPrice,
      priceSubtext
    }
  },
  seo {
    title,
    description,
    image
  }
}`);

export const FAQ_PAGE_QUERY = defineQuery(`*[_type == "faqPage"][0] {
  pageTitle,
  tabs[] {
    _key,
    tabName,
    tabTitle,
    questions[] {
      _key,
      questionText,
      answerText
    }
  },
  contactUsDescription,
  contactUsCta {
    displayText,
    url
  }
}`);
