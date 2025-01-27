import { defineQuery } from "next-sanity";

export const SPEAKERS_QUERY = defineQuery(`
    *[_type == "speaker"] {
        _id,
        name,
        pronouns,
        title,
        image
    }
`)

