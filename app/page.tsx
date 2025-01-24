import HourGlass from "@/components/icons/HourGlass";
import ConfigLogo from "@/components/ConfigLogo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Disney from "@/components/icons/Disney";
import Atlassian from "@/components/icons/Atlassian";
import Apple from "@/components/icons/Apple";
import AirBnb from "@/components/icons/AirBnb";
import Dell from "@/components/icons/Dell";
import Adidas from "@/components/icons/Adidas";
import Cinemark from "@/components/icons/Cinemark";
import EA from "@/components/icons/EA";

export default function Home() {
  return (
    <>
      <nav className="max-w-[1440px] mx-auto px-[90px] py-8 flex justify-between items-center ">
        <div className="uppercase">
          Figma’s conference for people <br /> who build products
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/speakers"
              className="uppercase border-[#252525] border-b-2 border-dashed"
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              href="/speakers"
              className="uppercase px-8 py-5 bg-[#252525] text-[#D5E1E1] rounded-[60px]"
            >
              Get tickets
            </Link>
          </li>
        </ul>
      </nav>
      <header className="">
        <div className="max-w-[1440px] mx-auto px-[90px]">
          <div className="size-3 bg-[#252525] rotate-45"></div>
          <div className="mt-6 flex items-center gap-20">
            <p className="uppercase">
              June 26-27 <br />
              2024
            </p>
            <p className="uppercase">
              Moscone Center <br />
              San Francisco, CA
            </p>
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
              Early bird tickets available now
            </p>
            <p className="font-light text-2xl mt-6">
              Register now to save 50% and be the first to reserve a seat at the
              most popular talks.
            </p>
          </div>
          <Link
            href="#"
            className="w-[630px] h-[242px] rounded-[300px] bg-[#0000FF] font-light text-5xl grid place-items-center"
          >
            Get tickets
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
              2024 will be the most exciting Config yet, with programming
              designed to connect a dynamic community of builders to the future
              of product development.
            </p>
            <Link
              href="/speakers"
              className="mt-4 inline-block rounded-[80px] font-light uppercase py-5 px-8 border-dashed border-2 border-[#252525]"
            >
              See all speakers
            </Link>
          </div>
          <div className="font-light text-[94px]">
            <p>75 + Speakers</p>
            <p>50 + Sessions</p>
            <p>8,000 + Attendees</p>
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
              Thank you to our sponsors
            </p>
            <p className="font-light text-2xl mt-6">
              We&apos;re excited to bring you an incredible Config experience,
              made possible by the support of our sponsors.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-4 gap-y-12 gap-x-16">
            <div className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center">
              <Disney className="max-w-20 grayscale contrast-100 brightness-100" />
            </div>
            <div className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center">
              <Atlassian className="max-w-20 grayscale contrast-100 brightness-100" />
            </div>
            <div className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center">
              <Apple className="max-w-20 grayscale contrast-100 brightness-100" />
            </div>
            <div className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center">
              <AirBnb className="max-w-20 grayscale contrast-100 brightness-100" />
            </div>
            <div className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center">
              <Dell className="max-w-20 grayscale contrast-100 brightness-100" />
            </div>
            <div className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center">
              <Adidas className="max-w-20 grayscale contrast-100 brightness-100" />
            </div>
            <div className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center">
              <Cinemark className="max-w-20 grayscale contrast-100 brightness-100" />
            </div>
            <div className="bg-[#f7ecd0] h-[11.25rem] w-full grid place-items-center">
              <EA className="max-w-20 grayscale contrast-100 brightness-100" />
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link
              href="/sponsors"
              className="mt-4 inline-block rounded-[80px] font-light uppercase py-5 px-8 border-dashed border-2 border-[#252525]"
            >
              See all sponsors
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
