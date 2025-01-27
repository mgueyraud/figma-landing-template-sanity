import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string | null;
  description: string | null;
  website: string | null;
  logo: SanityImageSource | null;
};

function SponsorCard({ name, description, website, logo }: Props) {
  const imageUrl = logo ? urlFor(logo).url() : null;

  return (
    <div>
      <div className="bg-black w-full h-60 grid place-items-center">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${name}`} width={138} height={138} />
        ) : null}
      </div>
      <h3 className="font-light text-2xl mt-8">{name}</h3>
      <p className="mt-4">{description}</p>
      <Link
        href={website ?? ""}
        target="_blank"
        className="text-sm uppercase border-b-2 border-dashed mt-16 inline-block"
      >
        {name}&nbsp;
        <span className="text-xs -translate-y-1 inline-block">↗</span>
      </Link>
    </div>
  );
}

export default SponsorCard;
