import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type SponsorCategory = {
    _id: string;
    name: string;
    sponsors: Sponsor[]
}

export type Sponsor = {
    _id: string,
    name: string,
    logo: SanityImageSource,
    description: string,
    website: string
}