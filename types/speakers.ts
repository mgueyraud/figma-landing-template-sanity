import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Speaker = {
    _id: string;
    name: string;
    pronouns: string;
    title: string;
    image: SanityImageSource;
}