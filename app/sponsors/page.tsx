import ConfigLogo from "@/components/ConfigLogo";
import Footer from "@/components/Footer";
import Disney from "@/components/icons/Disney";
import HourGlass from "@/components/icons/HourGlass";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

function Page() {
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
        <h2 className="font=light text-5xl mt-20">Strategic Sponsors</h2>
        <div className="grid grid-cols-3 gap-x-24 gap-y-16 mt-12">
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <div className="bg-black w-full h-60 grid place-items-center">
                <Disney className="max-w-[50%] grayscale contrast-100 brightness-100" />
              </div>
              <h3 className="font-light text-2xl mt-8">Coda</h3>
              <p className="mt-4">
                Coda is the all-in-one doc that brings words, data, and teams
                together.
              </p>
              <Link
                href="youtube.com"
                className="text-sm uppercase border-b-2 border-dashed mt-16 inline-block"
              >
                Coda
              </Link>
            </div>
          ))}
        </div>
        <hr className="w-full border-[#FFF5DA]/30 my-32" />
        <h2 className="font=light text-5xl mt-20">Core sponsors</h2>
        <div className="grid grid-cols-3 gap-x-24 gap-y-16 mt-12">
          {[...Array(10)].map((_, i) => (
            <div key={i}>
              <div className="bg-black w-full h-60 grid place-items-center">
                <Disney className="max-w-[50%] grayscale contrast-100 brightness-100" />
              </div>
              <h3 className="font-light text-2xl mt-8">Coda</h3>
              <p className="mt-4">
                Coda is the all-in-one doc that brings words, data, and teams
                together.
              </p>
              <Link
                href="youtube.com"
                className="text-sm uppercase border-b-2 border-dashed mt-16 inline-block"
              >
                Coda{" "}
                <span className="text-xs -translate-y-1 inline-block">↗</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <hr className="border-none h-4 w-full bg-[url('\/separator-sponsors.svg')]" />
      <Footer />
    </div>
  );
}

export default Page;
