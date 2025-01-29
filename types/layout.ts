export type Link = {
  displayText: string
  url: string
}

export type FooterLink = Link

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export type Footer = {
  columns: FooterColumn[]
}

export type Navbar = {
  secondaryLinks: Link[]
  cta: Link
} 