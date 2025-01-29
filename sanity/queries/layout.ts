import { defineQuery } from 'next-sanity'

export const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0] {
  columns[] {
    title,
    links[] {
      displayText,
      url
    }
  }
}`);



export const NAVBAR_QUERY = defineQuery(`*[_type == "navbar"][0] {
  secondaryLinks[] {
      displayText,
      url
  },
  cta
}`);
