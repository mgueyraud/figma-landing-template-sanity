import { defineQuery } from "next-sanity";

export const SPONSORS_QUERY = defineQuery(`
    *[_type == "sponsorCategory"] {
        _id,
        name,
        sponsors[] -> {
            _id,
            name,
            logo,
            description,
            website
        },
    }
`)
