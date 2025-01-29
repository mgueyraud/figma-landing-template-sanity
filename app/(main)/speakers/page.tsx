import ConfigLogo from "@/components/ConfigLogo";
import Footer from "@/components/Footer";
import HourGlass from "@/components/icons/HourGlass";
import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";
import { sanityFetch } from "@/sanity/lib/live";
import { SPEAKERS_PAGE_QUERY } from "@/sanity/queries/pages";
import { SPEAKERS_QUERY } from "@/sanity/queries/speakers";
import { SpeakersResponse } from "@/types/speakers";
import { SpeakersPage } from "@/types/speakersPage";
import { getMetadata } from "@/utils/getMetadata";
import Link from "next/link";
import React from "react";

export const generateMetadata = async () => getMetadata("speakersPage");

async function Page() {
  const [{ data: speakersResponse }, { data: speakersPage }]: [
    { data: SpeakersResponse },
    { data: SpeakersPage },
  ] = await Promise.all([
    sanityFetch({
      query: SPEAKERS_QUERY,
      tag: "speakers",
      params: {
        page: 1,
      },
    }),
    sanityFetch({
      query: SPEAKERS_PAGE_QUERY,
    }),
  ]);

  return (
    <div className="bg-[#0C5238] text-[#FFF5DA]">
      <Navbar
        logo={
          <Link href="/" aria-label="Go Home">
            <ConfigLogo />
          </Link>
        }
        style={
          {
            "--border-nav-color": "#FFF5DA",
            "--button-bg-color": "#FFF5DA",
            "--button-text-color": "#252525",
          } as React.CSSProperties
        }
      />
      <section className="max-w-[1440px] mx-auto px-[90px] mt-20">
        <div className="max-w-[540px]">
          <div className="flex gap-3 items-center">
            <HourGlass />
            <p className="uppercase">the lineup</p>
          </div>
          <p className="font-light text-2xl mt-8">{speakersPage.title}</p>
          <p className="mt-4">{speakersPage.description}</p>
        </div>
        <Speakers
          speakers={speakersResponse.speakers}
          total={speakersResponse.total}
        />
      </section>
      <hr className="border-none h-4 w-full bg-[url('\/separator-speakers.svg')]" />
      <Footer />
    </div>
  );
}

export default Page;
