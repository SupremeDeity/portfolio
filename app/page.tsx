import { CrystalCanvas } from "./Components/crystal";
import {
  FaAt,
  FaCaretRight,
  FaCodeCommit,
  FaGithub,
  FaRust,
} from "react-icons/fa6";
import {
  BiLogoCPlusPlus,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiDart, SiFlutter, SiNextdotjs, SiPrisma } from "react-icons/si";
import Image from "next/image";

export default function Home() {
  return (
    <div className="antialiased w-screen overflow-x-hidden overflow-y-scroll sm:snap-mandatory sm:snap-y h-screen">
      <main className="h-dvh snap-center">
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
                <div className="flex items-center gap-2 border border-slate-700 ease-in duration-300 text-white mt-6 text-xl bg-gray-800 w-max p-3 rounded hover:bg-gray-700 transition-all">
                  <FaGithub />
                  <span className="text-sm font-semibold">Github</span>
                  <FaCaretRight />
                </div>
              </a>
              <a href="mailto:mail@supdeity.com">
                <div className="flex ease-in duration-300 hover:bg-gray-700 transition-all select-all items-center gap-2 border border-slate-700 text-white mt-6 text-xl bg-gray-800 w-max p-3 rounded">
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
      <div className="sm:h-dvh shadow shadow-emerald-400">
        <div className="h-full bg-black/80 flex flex-col justify-evenly  snap-start">
          <span className="mt-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
            About Me
          </span>
          <div className="text-white text-sm mx-8 md:text-lg lg:mx-36 flex flex-col gap-10 h-full justify-center py-12">
            <span>
              Hey there! I&apos;m a passionate undergraduate student majoring in
              software engineering, with a keen interest in crafting seamless
              experiences for users across web and mobile platforms. Over the
              last couple of years, I&apos;ve immersed myself in the world of
              web and app development, exploring various technologies and
              methodologies to enhance my skills.
            </span>
            <span>
              Whether it&apos;s building sleek websites or crafting intuitive
              mobile applications, I&apos;ve dedicated myself to mastering the
              craft through freelance projects and personal endeavors. Along the
              way, I&apos;ve had the privilege of collaborating with talented
              teams, learning the importance of effective communication and
              teamwork in delivering top-notch solutions.
            </span>
            <span>
              Now, I&apos;m excited to take the next step in my journey by
              pursuing internship or job opportunities where I can learn from
              experienced developers, contribute meaningfully to projects, and
              continue to grow both personally and professionally. With a strong
              foundation in software engineering and a thirst for knowledge,
              I&apos;m ready to tackle new challenges and make a positive impact
              in the field. Let&apos;s connect and build something awesome
              together!
            </span>
          </div>
        </div>
      </div>
      <div className="sm:h-dvh shadow shadow-emerald-400 snap-start">
        <div className="h-full bg-black/90 flex flex-col justify-around w-full">
          <span className="mt-12 sm:mb-0 mb-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
            Skills
          </span>
          <div className="mb-12 sm:m-auto grid grid-cols-4 grid-rows-4 gap-y-4 sm:gap-x-12 gap-x-6 text-3xl place-items-center sm:mx-auto mx-4">
            <div className="border border-slate-700 row-span-2 ease-in duration-300 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoJavascript className="fill-yellow-400" />
            </div>
            <div className="border border-slate-700 text-white ease-in duration-300 bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoTypescript className="fill-blue-400" />
            </div>
            <div className="border border-slate-700 text-white ease-in duration-300 bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <FaRust className="fill-orange-400" />
            </div>
            <div className="border border-slate-700 row-span-2 ease-in duration-300 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoCPlusPlus className="fill-blue-400" />
            </div>
            <div className="border border-slate-700 row-span-2 ease-in duration-300 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoPython className="fill-gray-400" />
            </div>
            <div className="border border-slate-700 row-span-2 ease-in duration-300 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <SiDart className="fill-blue-400" />
            </div>

            <div className="border border-slate-700 col-start-3 ease-in duration-300 row-start-4 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoReact className="fill-blue-400" />
            </div>
            <div className="border border-slate-700 row-span-2 ease-in duration-300 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <SiNextdotjs />
            </div>
            <div className="border border-slate-700 row-span-2 ease-in duration-300 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <SiPrisma className="fill-white rounded p-1 bg-blue-500" />
            </div>
            <div className="border border-slate-700 col-start-2 ease-in duration-300 row-start-4 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <SiFlutter className="fill-blue-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:h-dvh shadow shadow-emerald-400 snap-start ">
        <div className="h-full bg-black/80 flex flex-col justify-around w-full gap-y-12">
          <span className="mt-12 sm:mb-0 mb-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
            PROJECTS
          </span>
          <div className="self-center text-white grid sm:grid-cols-2 sm:gap-x-16 gap-y-16 mb-16 mx-8">
            <div className="">
              <a href="https://urbane.supdeity.com" target="_blank">
                <Image
                  className="drop-shadow-primary rounded hover:brightness-75 w-[512px]"
                  src="/urbane.png"
                  alt="urbane preview"
                  width="1356"
                  height="629"
                />
              </a>
              <div className="flex items-center justify-between">
                <span className="text-md sm:text-lg uppercase font-bold">
                  Urbane
                </span>
                <a
                  href="https://github.com/supremedeity/urbane"
                  target="_blank"
                >
                  <FaGithub className="hover:fill-gray-300 text-lg transition-colors duration-100 ease-in" />
                </a>
              </div>
              <span className="text-sm text-gray-300">
                Modern dashboard developed using NextJS
              </span>
            </div>
            <div className="">
              <Image
                className="drop-shadow-primary rounded hover:brightness-75 w-[512px]"
                src="/siminventory.png"
                alt="siminventory preview"
                width="1356"
                height="629"
              />
              <div className="flex items-center justify-between">
                <span className="text-md sm:text-lg uppercase font-bold">
                  Siminventory
                </span>
                <span className="text-xs uppercase font-bold text-gray-300">
                  Private
                </span>
              </div>
              <span className="text-sm text-gray-300">
                A inventory management app for the future
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white bg-black p-2 shadow shadow-emerald-400  grid grid-cols-3 w-full items-center font-bold snap-center">
          <span className="sm:text-xs text-[8px]  text-primary drop-shadow-primary uppercase">
            Powered by Next.js
          </span>
          <a
            href="https://github.com/supremedeity/portfolio"
            target="_blank"
            className="w-max justify-self-center"
          >
            <FaGithub className="text-lg hover:fill-gray-300 transition-colors duration-100 ease-in" />
          </a>
          <span className="justify-self-end text-xs flex gap-1 items-center">
            <FaCodeCommit />{" "}
            {process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "DEV"}
          </span>
        </div>
      </div>
    </div>
  );
}
