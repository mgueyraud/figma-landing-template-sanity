"use client";
import { Speaker as SpeakerT } from "@/types/speakers";
import Speaker from "./Speaker";
import { useState } from "react";
import { SPEAKERS_QUERY } from "@/sanity/queries/speakers";
import { client } from "@/sanity/lib/client";

export default function Speakers({
  speakers: initialSpeakers,
  total,
}: {
  speakers: SpeakerT[];
  total: number;
}) {
  const [speakers, setSpeakers] = useState(initialSpeakers);
  const [page, setPage] = useState(1);

  const loadMoreSpeakers = () => {
    client
      .fetch(SPEAKERS_QUERY, {
        page: page + 1,
      })
      .then(({ speakers }: { speakers: SpeakerT[] }) => {
        setSpeakers((s) => [...s, ...speakers]);
        setPage((p) => p + 1);
      });
  };

  return (
    <>
      <div className="mt-20 grid grid-cols-2 gap-x-16 gap-y-8">
        {speakers.map((speaker) => (
          <Speaker key={speaker._id} {...speaker} />
        ))}
      </div>
      <div className="mt-20 mb-32 flex justify-center">
        {speakers.length < total ? (
          <button
            onClick={loadMoreSpeakers}
            className="inline-block rounded-[80px] font-light uppercase py-5 px-8 border-dashed border-2 border-[#FFF5DA]"
          >
            Load more
          </button>
        ) : null}
      </div>
    </>
  );
}
