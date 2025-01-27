import { SanityImageSource } from "@sanity/image-url/lib/types/types";
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

export type Speaker = {
    _id: string;
    name: string;
    pronouns: string;
    title: string;
    image: SanityImageSource;
}