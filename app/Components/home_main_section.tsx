import { FaGithub, FaCaretRight, FaAt, FaDownload } from "react-icons/fa6";
import { CrystalCanvas } from "./crystal";
import { Suspense } from "react";
import Image from "next/image";
import PosterImage from "./poster.webp";
import Icon from "../icon2.png";

export function HomeMainSection() {
  return (
    <main className="h-dvh snap-center">
      <div className="h-full max-h-full bg-black/55 uppercase text-primary ">
        <div className="relative top-6 select-none w-full text-center">
          <div className="flex justify-center">
            <div className="border-2 border-primary p-2 rounded-2xl flex gap-x-2 items-center">
              <span className="relative flex h-[10px] w-[10px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-primary"></span>
              </span>
              <span className=" normal-case text-xs font-bold">
                Available for Hire
              </span>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-row justify-evenly items-center pb-6">
          <div className="flex flex-col justify-center">
            <span className="font-light text-[16px] sm:text-[24px]">
              Portfolio
            </span>
            <span className="font-extrabold text-[48px] leading-[48px] sm:text-[64px] sm:leading-[64px] w-max drop-shadow-primary">
              Muhammad
              <br />
              Mohsin
            </span>
            <div className="flex gap-4">
              <a href="https://github.com/SupremeDeity" target="_blank">
                <div className="flex items-center gap-2 text-black mt-6 text-xl bg-gray-800 w-max p-3 animated_box">
                  <FaGithub />
                  <span className="text-sm font-bold">Github</span>
                  <FaCaretRight />
                </div>
              </a>
              <a href="mailto:mail@supdeity.com">
                <div className="flex select-all items-center gap-2 text-black mt-6 text-xl bg-gray-800 w-max p-3 animated_box before:h-[800%]">
                  <FaAt />
                  <span className="text-sm font-bold text-black lowercase">
                    mail@supdeity.com
                  </span>
                </div>
              </a>
            </div>
            <a className="max-w-min" href="/Mohsin_Resume.pdf" target="_blank">
                <div className="flex items-center gap-2 text-black mt-6 text-xl bg-gray-800 w-max p-3 animated_box">
                  <FaDownload />
                  <span className="text-sm font-bold">Download Resume</span>
                </div>
              </a>
          </div>
          <div className="hidden md:flex md:justify-center md:max-w-80 lg:min-w-96 h-full items-center">
            <Suspense
              fallback={
                <Image
                  width={280}
                  className="h-max"
                  src={PosterImage}
                  alt="rystal model"
                  priority
                />
              }
            >
              <CrystalCanvas />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
