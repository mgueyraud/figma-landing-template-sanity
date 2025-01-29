import { defineQuery } from "next-sanity";

export const SPEAKERS_QUERY = defineQuery(`
    {
        "speakers": *[_type == "speaker"] | order(_createdAt desc) [($page - 1) * 10...($page * 10)] {
            _id,
            name,
            pronouns,
            title,
            image
        },
        "total": count(*[_type == "speaker"])
    }
`)
