import { SEO } from "./seo";

export type TicketsPageQuery = {
    title: string;
    sections: {
        _key: string;
        title: string;
        tickets: Ticket[];
    }[];
    seo: SEO
}

export type Ticket = {
    _id: string;
    title: string;
    description?: string;
    currentPrice: number;
    hasDiscount: boolean;
    originalPrice?: number;
    priceSubtext?: string;
}