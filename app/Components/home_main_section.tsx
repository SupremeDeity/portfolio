import { FaGithub, FaCaretRight, FaAt } from "react-icons/fa6"
import { CrystalCanvas } from "./crystal"

export function HomeMainSection () {
    return <main className="h-dvh snap-center">
        <div className="h-full max-h-full bg-black/60 uppercase text-primary flex flex-row justify-evenly gap-x-24 lg:gap-x-48 ">
          <div className="flex flex-col justify-center">
            <span className="font-light text-[16px] sm:text-[24px]">
              Portfolio
            </span>
            <span className="font-extrabold text-[48px] leading-[48px] sm:text-[64px] sm:leading-[64px] w-max drop-shadow-primary">
              Muhammad
              <br />
              Mohsin
            </span>
            <div className="flex gap-x-4">
              <a href="https://github.com/SupremeDeity" target="_blank">
                <div className="flex items-center gap-2 text-white mt-6 text-xl bg-gray-800 w-max p-3 animated_box">
                  <FaGithub />
                  <span className="text-sm font-semibold">Github</span>
                  <FaCaretRight />
                </div>
              </a>
              <a href="mailto:mail@supdeity.com">
                <div className="flex select-all items-center gap-2 text-white mt-6 text-xl bg-gray-800 w-max p-3 animated_box before:h-[800%]">
                  <FaAt />
                  <span className="text-sm font-bold text-gray-300 lowercase">
                    mail@supdeity.com
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="md:w-1/3 hidden md:block">
            <CrystalCanvas />
          </div>
        </div>
      </main>
}