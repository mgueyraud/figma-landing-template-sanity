import ConfigLogo from "@/components/ConfigLogo";
import Footer from "@/components/Footer";
import HourGlass from "@/components/icons/HourGlass";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="bg-[#D5E1E1] text-[#171717]">
      <Navbar
        logo={
          <Link href="/" aria-label="Go Home">
            <ConfigLogo />
          </Link>
        }
        style={
          {
            "--border-nav-color": "#252525",
            "--button-bg-color": "#252525",
            "--button-text-color": "#D5E1E1",
          } as React.CSSProperties
        }
      />
      <main className="max-w-[1440px] mx-auto px-[90px] mt-20">
        <div className="flex gap-3 items-center">
          <HourGlass />
          <p className="uppercase">Register</p>
        </div>
        <div className="flex gap-32 mt-8">
          <p className="max-w-[200px] font-light text-2xl">
            Join us in June for Config 2024.
          </p>
          <div className="flex-1">
            <p className="font-light text-[32px]">
              Attend in person at Moscone Center in San Francisco. Your ticket
              includes access to the virtual Config experience too.
            </p>
            <button
              className="border-2 border-dashed border-[#252525] rounded-lg p-8 mt-6 w-full text-start"
              aria-label="Buy a single in person ticket"
            >
              <p className="font-light text-5xl">Single in person ticket</p>
              <p className="mt-8 text-2xl">
                <s>$699</s>
                &nbsp;
                <b>$349.50</b>
              </p>
              <p className="mt-3">Early bird (50% off) while supplies last</p>
            </button>
            <button
              className="border-2 border-dashed border-[#252525] rounded-lg p-8 mt-6 w-full text-start"
              aria-label="Multiple in person tickets"
            >
              <p className="font-light text-5xl">Multiple in person tickets</p>
              <p className="mt-6 font-light text-2xl">
                Buy 3 tickets, get 1 free! Discount applied at checkout.
              </p>
              <p className="mt-8 text-2xl">
                <s>$699</s>
                &nbsp;
                <b>$349.50</b>
                &nbsp;
                <span className="font-light">per attendee</span>
              </p>
            </button>
            <p className="font-light text-[32px] mt-16">
              Attend virtually from anywhere.
            </p>
            <button
              className="border-2 border-dashed border-[#252525] rounded-lg p-8 mt-6 mb-24 w-full text-start"
              aria-label="Multiple in person tickets"
            >
              <p className="font-light text-5xl">Virtual</p>
              <p className="mt-6 font-light text-2xl">
                Live-streaming online, limit one virtual ticket per attendee.
              </p>
              <p className="mt-8 text-2xl">
                <b>Free</b>
              </p>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
