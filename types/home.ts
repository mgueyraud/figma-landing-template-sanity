import { Link } from './layout'
import { SEO } from './seo'

type RegistrationBanner = {
  title: string
  description: string
  cta: Link
}

type LineupSection = {
  text: string
  cta: Link
  speakersCount: number
  sessionsCount: number
  attendeesCount: number
}

type SponsorsSection = {
  title: string
  description: string
  sponsors: {
    _id: string
    name: string
    logo: {
      asset: {
        url: string
      }
    }
  }[]
  cta: Link
}

export type Home = {
  headerTitle: string
  conferenceDate: string
  location: string
  registrationBanner: RegistrationBanner
  lineupSection: LineupSection
  sponsorsSection: SponsorsSection
  seo: SEO
} 