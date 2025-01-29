import { sanityFetch } from "@/sanity/lib/live"
import { SEO_QUERY } from "@/sanity/queries/seo"
import { SEO } from "@/types/seo"
import { Metadata } from "next"
import { urlFor } from "@/sanity/lib/image"

export async function getMetadata(type: string): Promise<Metadata> {
  const { data: page }: { data: { seo: SEO } } = await sanityFetch({
    query: SEO_QUERY,
    params: {
      type,
    },
  })

  if (!page) {
    return {}
  }

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
  }

  if (page.seo.image) {
    metadata.openGraph = {
      images: {
        url: urlFor(page.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    }
  }

  if (page.seo.noIndex) {
    metadata.robots = "noindex"
  }

  return metadata
}
