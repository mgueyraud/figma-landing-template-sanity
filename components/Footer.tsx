import React from "react";
import FigmaLogo from "./FigmaLogo";
import Link from "next/link";
import ConfigLogo from "./ConfigLogo";
import World from "./icons/World";
import FadeText from "./FadeText";

function Footer() {
  return (
    <footer
      className="bg-[#252525] text-[#D5E1E1] relative h-[730px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+730px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-730px)] h-[730px]">
          <div className="max-w-[1440px] mx-auto px-[90px] pt-20 pb-8">
            <div className="flex justify-between">
              <FigmaLogo />
              <div className="flex gap-16">
                <div className="flex flex-col gap-7">
                  <p className="text-sm uppercase">Menu</p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/speakers"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>Speakers</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>Get tickets</FadeText>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-7">
                  <p className="text-sm uppercase">Resources</p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/speakers"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>Why attend</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>FAQ</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>Sponsors</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>Hotels</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>Visa letters</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>Code of conduct</FadeText>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-7">
                  <p className="text-sm uppercase">Follow</p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/speakers"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>X</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>LinkedIn</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>Instagram</FadeText>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tickets"
                        className="uppercase border-[#D5E1E1] border-b-2 border-dashed inline-block"
                      >
                        <FadeText>YouTube</FadeText>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ConfigLogo className="w-full h-full mt-20" />
            <div className="flex justify-end mt-2">
              <div className="text-sm text-white/60 flex gap-4">
                <p className="flex items-center gap-2">
                  <World />
                  <span>English</span>
                  <span>↓</span>
                </p>
                <span>/</span>
                <span>© Figma 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
