import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Speaker as SpeakerProps } from "@/sanity/queries/speakers";

const Speaker = ({ name, pronouns, title, image }: SpeakerProps) => {
  return (
    <div>
      <div className="flex gap-14">
        <Image
          src={urlFor(image).url()}
          alt={`Photo of ${name}`}
          width={150}
          height={150}
        />
        <div>
          <p className="font-light text-2xl">{name}</p>
          <p className="text-sm mt-1">{pronouns}</p>
          <p className="mt-2 uppercase">{title}</p>
        </div>
      </div>
      <hr className="border-[#FFF5DA]/60 mt-8" />
    </div>
  );
};

export default Speaker;
