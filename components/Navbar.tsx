import Link from "next/link";
import React from "react";
import FadeText from "./FadeText";

type Props = {
  text?: string;
  logo?: React.ReactNode;
  style?: React.CSSProperties;
};

function Navbar({ text, logo, style = {} }: Props) {
  return (
    <nav
      className="max-w-[1440px] mx-auto px-[90px] py-8 flex justify-between items-center"
      style={style}
    >
      {text ? <div className="uppercase max-w-[273px]">{text}</div> : null}
      {logo ? logo : null}
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="/speakers"
            className="relative block uppercase border-[var(--border-nav-color)] pb-1 border-b-2 border-dashed overflow-hidden "
          >
            <FadeText>Speakers</FadeText>
          </Link>
        </li>
        <li>
          <Link
            href="/registration"
            className="uppercase px-8 py-5 bg-[var(--button-bg-color)] text-[var(--button-text-color)] rounded-[60px]"
          >
            Get tickets
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
