import ConfigLogo from "@/components/ConfigLogo";
import Footer from "@/components/Footer";
import HourGlass from "@/components/icons/HourGlass";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div className="bg-[#0C5238] text-[#FFF5DA]">
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
        <div className="max-w-[540px]">
          <div className="flex gap-3 items-center">
            <HourGlass />
            <p className="uppercase">the lineup</p>
          </div>
          <p className="font-light text-2xl mt-8">
            More than 75 speakers from around the globe will join us at Config
            2024 to share how they’re thinking, what they’re making, and
            what&apos;s next.
          </p>
          <p className="mt-4">
            Attendees will leave feeling more connected to a community of
            builders and to the future of product development.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-x-16 gap-y-8">
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <div className="flex gap-14">
                  <Image
                    src="/profile.png"
                    alt="Jesper Kouthoofd"
                    width={150}
                    height={150}
                  />
                  <div>
                    <p className="font-light text-2xl">Jesper Kouthoofd</p>
                    <p className="text-sm mt-1">He/him</p>
                    <p className="mt-2 uppercase">
                      Head of Design & Chief Executive Officer at Teenage
                      Engineering
                    </p>
                  </div>
                </div>
                <hr className="border-[#FFF5DA]/60 mt-8" />
              </div>
            ))}
        </div>
        <div className="mt-20 mb-32 flex justify-center">
          <button className="inline-block rounded-[80px] font-light uppercase py-5 px-8 border-dashed border-2 border-[#FFF5DA]">
            Load more
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Page;
