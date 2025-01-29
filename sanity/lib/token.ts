export const token = process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN;

if(!token) {
    throw new Error("Missing SANITY_PREVIEW_TOKEN")
}