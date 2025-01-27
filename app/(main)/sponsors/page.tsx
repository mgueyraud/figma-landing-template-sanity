import ConfigLogo from "@/components/ConfigLogo";
import Footer from "@/components/Footer";
import HourGlass from "@/components/icons/HourGlass";
import Navbar from "@/components/Navbar";
import SponsorCard from "@/components/SponsorCard";
import { sanityFetch } from "@/sanity/lib/live";
import { SPONSORS_QUERY } from "@/sanity/queries/sponsors";
import { SponsorCategory } from "@/types/sponsors";
import Link from "next/link";
import React from "react";

async function Page() {
  const { data: sponsorsCategory }: { data: SponsorCategory[] } =
    await sanityFetch({
      query: SPONSORS_QUERY,
      tag: "sponsorsCategory",
    });

  return (
    <div className="bg-[#252525] text-[#FFF5DA]">
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
      <section className="max-w-[1440px] mx-auto px-[90px] mt-20 mb-60">
        <div className="max-w-[540px]">
          <div className="flex gap-3 items-center">
            <HourGlass />
            <h1 className="uppercase">Sponsors</h1>
          </div>
          <p className="font-light text-2xl mt-8">Thank you to our sponsors</p>
          <p className="mt-4">
            We&apos;re excited to bring you an incredible Config experience,
            made possible by the generous support of our sponsors.
          </p>
        </div>

        {sponsorsCategory.map((category, i) => (
          <div key={category._id}>
            <h2 className="font=light text-5xl mt-20">{category.name}</h2>
            <div className="grid grid-cols-3 gap-x-24 gap-y-16 mt-12">
              {category.sponsors?.map((sponsor) => (
                <SponsorCard key={sponsor._id} {...sponsor} />
              ))}
            </div>
            {i < sponsorsCategory.length - 1 ? (
              <hr className="w-full border-[#FFF5DA]/30 my-32" />
            ) : null}
          </div>
        ))}
      </section>
      <hr className="border-none h-4 w-full bg-[url('\/separator-sponsors.svg')]" />
      <Footer />
    </div>
  );
}

export default Page;
