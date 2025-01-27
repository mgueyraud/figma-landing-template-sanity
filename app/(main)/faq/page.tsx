import ConfigLogo from "@/components/ConfigLogo";
import Footer from "@/components/Footer";
import ChevronDown from "@/components/icons/ChevronDown";
import HourGlass from "@/components/icons/HourGlass";
import Navbar from "@/components/Navbar";
import { Accordion } from "@base-ui-components/react/accordion";
import Link from "next/link";
import React from "react";
import { Tabs } from "@base-ui-components/react/tabs";

async function Page() {
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
        <Tabs.Root defaultValue="general" orientation="vertical">
          <div className="flex gap-3 items-center">
            <HourGlass />
            <p className="uppercase">FAQ</p>
          </div>
          <div className="flex gap-32 mt-8 mb-24">
            <div className="max-w-80">
              <p className="font-light text-2xl">
                The most common questions about Config, answered.
              </p>
              <Tabs.List className="mt-12 flex flex-col gap-2 text-[#252525]">
                <Tabs.Tab
                  value="general"
                  className="uppercase px-4 py-2 rounded-[40px] bg-[#FFF5DA] w-fit data-[selected]:bg-[#F79CFF]"
                >
                  General
                </Tabs.Tab>
                <Tabs.Tab
                  value="in-person"
                  className="uppercase px-4 py-2 rounded-[40px] bg-[#FFF5DA] w-fit data-[selected]:bg-[#F79CFF]"
                >
                  In-person
                </Tabs.Tab>
                <Tabs.Tab
                  value="virtual"
                  className="uppercase px-4 py-2 rounded-[40px] bg-[#FFF5DA] w-fit data-[selected]:bg-[#F79CFF]"
                >
                  Virtual
                </Tabs.Tab>
              </Tabs.List>
            </div>
            <Tabs.Panel value="general" className="flex-1">
              <h1 className="font-light text-5xl">General Questions</h1>
              <Accordion.Root className="mt-3">
                <Accordion.Item className="border-b-2 border-[#FFF5DA] border-dashed">
                  <Accordion.Header>
                    <Accordion.Trigger className="font-light text-2xl flex justify-between items-center py-9 w-full group">
                      <p>What can I expect at Config?</p>
                      <ChevronDown className="group-data-[panel-open]:rotate-180 transition" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="pb-5">I expect</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item className="border-b-2 border-[#FFF5DA] border-dashed">
                  <Accordion.Header>
                    <Accordion.Trigger className="font-light text-2xl flex justify-between items-center py-9 w-full group">
                      <p>
                        Will Config sessions be recorded? When are recordings
                        available?
                      </p>
                      <ChevronDown className="group-data-[panel-open]:rotate-180 transition" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="pb-5">I expect</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item className="border-b-2 border-[#FFF5DA] border-dashed">
                  <Accordion.Header>
                    <Accordion.Trigger className="font-light text-2xl flex justify-between items-center py-9 w-full group">
                      <p>Where can I find the conference agenda?</p>
                      <ChevronDown className="group-data-[panel-open]:rotate-180 transition" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="pb-5">I expect</Accordion.Panel>
                </Accordion.Item>
              </Accordion.Root>
            </Tabs.Panel>
            <Tabs.Panel value="in-person" className="flex-1">
              <h1 className="font-light text-5xl">In-Person Questions</h1>
              <Accordion.Root className="mt-3 mb-24">
                <Accordion.Item className="border-b-2 border-[#FFF5DA] border-dashed">
                  <Accordion.Header>
                    <Accordion.Trigger className="font-light text-2xl flex justify-between items-center py-9 w-full group">
                      <p>What can I expect at Config?</p>
                      <ChevronDown className="group-data-[panel-open]:rotate-180 transition" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="pb-5">I expect</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item className="border-b-2 border-[#FFF5DA] border-dashed">
                  <Accordion.Header>
                    <Accordion.Trigger className="font-light text-2xl flex justify-between items-center py-9 w-full group">
                      <p>
                        Will Config sessions be recorded? When are recordings
                        available?
                      </p>
                      <ChevronDown className="group-data-[panel-open]:rotate-180 transition" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="pb-5">I expect</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item className="border-b-2 border-[#FFF5DA] border-dashed">
                  <Accordion.Header>
                    <Accordion.Trigger className="font-light text-2xl flex justify-between items-center py-9 w-full group">
                      <p>Where can I find the conference agenda?</p>
                      <ChevronDown className="group-data-[panel-open]:rotate-180 transition" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="pb-5">I expect</Accordion.Panel>
                </Accordion.Item>
              </Accordion.Root>
            </Tabs.Panel>
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
              Need additional help or have a question not listed? Please
              don&apos;t hesitate to fill out , and we&apos;ll get back to you
              as soon as we can.
            </p>
            <Link
              href="mailto:mgueyraud.junior@gmail.com"
              className="inline-block rounded-[80px] font-light uppercase py-5 px-8 border-dashed border-2 border-[#252525]  mt-8"
            >
              Contact us
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
