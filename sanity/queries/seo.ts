import { defineQuery } from "next-sanity";

export const SEO_QUERY = defineQuery(`
  *[_type == $type ][0] {
    "seo": {
        "title": coalesce(seo.title, title, ""),
        "description": coalesce(seo.description,  ""),
        "image": seo.image,
        "noIndex": seo.noIndex == true
    },
  }
`);

