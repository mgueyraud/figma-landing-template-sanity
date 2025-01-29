import Link from "next/link";
import React from "react";
import FadeText from "./FadeText";
import { sanityFetch } from "@/sanity/lib/live";
import { NAVBAR_QUERY } from "@/sanity/queries/layout";
import type { Navbar } from "@/types/layout";

type Props = {
  text?: string;
  logo?: React.ReactNode;
  style?: React.CSSProperties;
};

async function Navbar({ text, logo, style = {} }: Props) {
  const { data: navbar }: { data: Navbar } = await sanityFetch({
    query: NAVBAR_QUERY,
  });

  return (
    <nav
      className="max-w-[1440px] mx-auto px-[90px] py-8 flex justify-between items-center"
      style={style}
    >
      {text ? <div className="uppercase max-w-[273px]">{text}</div> : null}
      {logo ? logo : null}
      <ul className="flex items-center gap-6">
        {navbar.secondaryLinks.map((link) => (
          <li key={link.displayText + link.url}>
            <Link
              href={link.url}
              className="relative block uppercase border-[var(--border-nav-color)] pb-1 border-b-2 border-dashed overflow-hidden "
            >
              <FadeText>{link.displayText}</FadeText>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={navbar.cta.url}
            className="uppercase px-8 py-5 bg-[var(--button-bg-color)] text-[var(--button-text-color)] rounded-[60px]"
          >
            {navbar.cta.displayText}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
