type SanityImage = {
  asset: {
    url: string
  }
}

export type SEO = {
  title?: string
  description?: string
  image?: SanityImage
  noIndex?: boolean
} 