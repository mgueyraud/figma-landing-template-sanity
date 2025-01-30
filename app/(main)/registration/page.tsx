import ConfigLogo from "@/components/ConfigLogo";
import Footer from "@/components/Footer";
import HourGlass from "@/components/icons/HourGlass";
import Navbar from "@/components/Navbar";
import Ticket from "@/components/Ticket";
import { sanityFetch } from "@/sanity/lib/live";
import { TICKETS_PAGE_QUERY } from "@/sanity/queries/pages";
import { TicketsPageQuery } from "@/types/ticketsPage";
import { getMetadata } from "@/utils/getMetadata";
import Link from "next/link";
import React from "react";

export const generateMetadata = async () => getMetadata("ticketsPage");

async function Page() {
  const { data: ticketsPage }: { data: TicketsPageQuery } = await sanityFetch({
    query: TICKETS_PAGE_QUERY,
  });

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
            {ticketsPage.title}
          </p>
          <div className="flex-1 flex flex-col gap-16 mb-24">
            {ticketsPage.sections.map((section) => (
              <div key={section._key}>
                <p className="font-light text-[32px]">{section.title}</p>
                {section.tickets.map((ticket) => (
                  <Ticket key={ticket._id} {...ticket} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <hr className="border-none h-4 w-full bg-[url('\/separator-registration.svg')]" />
      <Footer />
    </div>
  );
}

export default Page;
