import ConfigLogo from "@/components/ConfigLogo";
import Footer from "@/components/Footer";
import HourGlass from "@/components/icons/HourGlass";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { Tabs } from "@base-ui-components/react/tabs";
import { FaqPage } from "@/types/faqPage";
import { sanityFetch } from "@/sanity/lib/live";
import { FAQ_PAGE_QUERY } from "@/sanity/queries/pages";
import Questions from "@/components/Questions";
import { getMetadata } from "@/utils/getMetadata";

export const generateMetadata = async () => getMetadata("faqPage");

async function Page() {
  const { data: faqPage }: { data: FaqPage } = await sanityFetch({
    query: FAQ_PAGE_QUERY,
  });

  return (
    <div className="bg-[#5A4C4C] text-[#FFF5DA]">
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
        <Tabs.Root
          defaultValue={faqPage.tabs[0].tabName}
          orientation="vertical"
        >
          <div className="flex gap-3 items-center">
            <HourGlass />
            <p className="uppercase">FAQ</p>
          </div>
          <div className="flex gap-32 mt-8 mb-24">
            <div className="max-w-80">
              <h1 className="font-light text-2xl">{faqPage.pageTitle}</h1>
              <Tabs.List className="mt-12 flex flex-col gap-2 text-[#252525]">
                {faqPage.tabs.map((tab) => (
                  <Tabs.Tab
                    key={tab._key + "-tab"}
                    value={tab.tabName}
                    className="uppercase px-4 py-2 rounded-[40px] bg-[#FFF5DA] w-fit data-[selected]:bg-[#F79CFF]"
                  >
                    {tab.tabName}
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </div>
            {faqPage.tabs.map((tab) => (
              <Tabs.Panel
                key={tab._key + "-panel"}
                value={tab.tabName}
                className="flex-1"
              >
                <h1 className="font-light text-5xl">{tab.tabTitle}</h1>

                <Questions questions={tab.questions} />
              </Tabs.Panel>
            ))}
          </div>
        </Tabs.Root>
      </section>
      <section className="bg-[#FFF5DA] text-[#252525]">
        <div className="max-w-[1440px] mx-auto px-[90px] py-20 flex justify-between">
          <div className="flex gap-3 items-center">
            <HourGlass />
            <p className="uppercase">Contact us</p>
          </div>
          <div className="max-w-[528px]">
            <p className="font-light text-2xl">
              {faqPage.contactUsDescription}
            </p>
            <Link
              href={faqPage.contactUsCta.url}
              className="inline-block rounded-[80px] font-light uppercase py-5 px-8 border-dashed border-2 border-[#252525]  mt-8"
            >
              {faqPage.contactUsCta.displayText}
            </Link>
          </div>
        </div>
      </section>
      <hr className="border-none h-4 w-full bg-[url('\/separator-faq.svg')]" />
      <Footer />
    </div>
  );
}

export default Page;
