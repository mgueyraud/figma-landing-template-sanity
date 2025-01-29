import HourGlass from "@/components/icons/HourGlass";
import ConfigLogo from "@/components/ConfigLogo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import AnimatedNumber from "@/components/AnimatedNumber";
import Navbar from "@/components/Navbar";
import { sanityFetch } from "@/sanity/lib/live";
import { Home } from "@/types/home";
import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY } from "@/sanity/queries/pages";
import { getMetadata } from "@/utils/getMetadata";

export const generateMetadata = async () => getMetadata("home");

export default async function Page() {
  const { data: home }: { data: Home } = await sanityFetch({
    query: HOME_QUERY,
  });

  return (
    <div className="bg-[#D5E1E1] text-[#171717]">
      <Navbar
        text="Figma's conference for people who build products"
        style={
          {
            "--border-nav-color": "#252525",
            "--button-bg-color": "#252525",
            "--button-text-color": "#D5E1E1",
          } as React.CSSProperties
        }
      />
      <header className="">
        <div className="max-w-[1440px] mx-auto px-[90px]">
          <div className="size-3 bg-[#252525] rotate-45"></div>
          <div className="mt-6 flex items-center gap-20">
            <p className="uppercase">{home.conferenceDate}</p>
            <p className="uppercase">{home.location}</p>
          </div>
          <ConfigLogo className="w-full h-full mt-16" />
        </div>
        <Image
          width={1440}
          height={720}
          className="w-full mt-16"
          src="/main-hero.png"
          alt=""
        />
      </header>
      <section className="bg-[#1B1464] text-[#FFF5DA]">
        <div className="max-w-[1440px] mx-auto px-[90px] py-20 flex justify-between items-center">
          <div className="max-w-[385px]">
            <div className="flex gap-3 items-center">
              <HourGlass />
              <p className="uppercase">Join Us</p>
            </div>
            <p className="font-light text-5xl mt-8">
              {home.registrationBanner.title}
            </p>
            <p className="font-light text-2xl mt-6">
              {home.registrationBanner.description}
            </p>
          </div>
          <Link
            href={home.registrationBanner.cta.url}
            className="w-[630px] h-[242px] rounded-[300px] bg-[#0000FF] font-light text-5xl grid place-items-center"
          >
            {home.registrationBanner.cta.displayText}
          </Link>
        </div>
      </section>
      <section className="bg-[#F79CFF] text-[#252525]">
        <div className="max-w-[1440px] mx-auto px-[90px] py-20 flex justify-between items-center">
          <div className="max-w-[414px]">
            <div className="flex gap-3 items-center">
              <HourGlass />
              <p className="uppercase">The lineup</p>
            </div>
            <p className="font-light text-2xl mt-8">
              {home.lineupSection.text}
            </p>
            <Link
              href={home.lineupSection.cta.url}
              className="mt-4 inline-block rounded-[80px] font-light uppercase py-5 px-8 border-dashed border-2 border-[#252525]"
            >
              {home.lineupSection.cta.displayText}
            </Link>
          </div>
          <div className="font-light text-[94px] flex-1">
            <div>
              <AnimatedNumber
                value={home.lineupSection.speakersCount}
                suffixText="+ Speakers"
              />
            </div>
            <div>
              <AnimatedNumber
                value={home.lineupSection.sessionsCount}
                suffixText="+ Sessions"
              />
            </div>
            <div>
              <AnimatedNumber
                value={home.lineupSection.attendeesCount}
                suffixText="+ Attendees"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF5DA] text-[#252525]">
        <div className="max-w-[1440px] mx-auto px-[90px] py-20">
          <div className="max-w-[648px]">
            <div className="flex gap-3 items-center">
              <HourGlass />
              <p className="uppercase">sponsors</p>
            </div>
            <p className="font-light text-5xl mt-8">
              {home.sponsorsSection.title}
            </p>
            <p className="font-light text-2xl mt-6">
              {home.sponsorsSection.description}
            </p>
          </div>
          <div className="mt-16 grid grid-cols-4 gap-y-12 gap-x-16">
            {home.sponsorsSection.sponsors.map((sponsor) => (
              <div
                key={sponsor._id}
                className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center"
              >
                <Image
                  src={urlFor(sponsor.logo).url()}
                  alt={sponsor.name}
                  width={80}
                  className="drop-shadow-xl"
                  height={80}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Link
              href={home.sponsorsSection.cta.url}
              className="mt-4 inline-block rounded-[80px] font-light uppercase py-5 px-8 border-dashed border-2 border-[#252525]"
            >
              {home.sponsorsSection.cta.displayText}
            </Link>
          </div>
        </div>
      </section>
      <hr className="border-none h-4 w-full bg-[url('\/separator-home.svg')]" />
      <Footer />
    </div>
  );
}
