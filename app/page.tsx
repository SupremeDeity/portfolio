import { RiJavascriptFill } from "react-icons/ri";
import { CrystalCanvas } from "./Components/crystal";
import { FaGithub, FaLinkedin, FaRust } from "react-icons/fa6";
import {
  BiLogoCPlusPlus,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiDart,
  SiFlutter,
  SiGithub,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <main className="h-dvh">
        <div className="h-full bg-black/60 uppercase text-primary flex justify-evenly gap-x-48">
          <div className="flex flex-col justify-center">
            <span className="font-light text-[24px]">Portfolio</span>
            <span className="font-extrabold text-[64px] leading-[64px] w-max drop-shadow-primary">
              Muhammad
              <br />
              Mohsin
            </span>
            <div className="flex gap-x-6">
              <a href="https://github.com/SupremeDeity" target="_blank">
                <div className="flex items-center gap-4 border border-slate-700  text-white mt-6 text-xl bg-gray-800 w-max p-3 rounded hover:bg-gray-700 transition-all">
                  <FaGithub />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-mohsin-550945255/"
                target="_blank"
              >
                <div className="text-white mt-6 text-xl border border-slate-700 bg-gray-800 w-max p-3 rounded hover:bg-gray-700 transition-colors">
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </div>
          <div className="w-80">
            <CrystalCanvas />
          </div>
        </div>
      </main>
      <div className="h-dvh shadow shadow-emerald-400">
        <div className="h-full bg-black/80 flex flex-col justify-evenly ">
          <span className=" mt-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
            About Me
          </span>
          <div className="text-white text-lg mx-36 flex flex-col gap-10 h-full justify-center py-12">
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
      <div className="h-dvh shadow shadow-emerald-400">
        <div className="h-full bg-black/90 flex flex-col justify-around w-full">
          <span className="mt-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
            Skills
          </span>
          <div className="m-auto grid grid-cols-4 grid-rows-4 gap-y-4 gap-x-12 text-3xl place-items-center">
            <div className="border border-slate-700 row-span-2 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoJavascript className="fill-yellow-400" />
            </div>
            <div className="border border-slate-700 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoTypescript className="fill-blue-400" />
            </div>
            <div className="border border-slate-700 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <FaRust className="fill-orange-400" />
            </div>
            <div className="border border-slate-700 row-span-2 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoCPlusPlus className="fill-blue-400" />
            </div>
            <div className="border border-slate-700 row-span-2 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoPython className="fill-gray-400" />
            </div>
            <div className="border border-slate-700 row-span-2 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <SiDart className="fill-blue-400" />
            </div>

            <div className="border border-slate-700 col-start-3 row-start-4 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <BiLogoReact className="fill-blue-400" />
            </div>
            <div className="border border-slate-700 row-span-2 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <SiNextdotjs />
            </div>
            <div className="border border-slate-700 row-span-2  text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <SiPrisma className="fill-white rounded p-1 bg-blue-500" />
            </div>
            <div className="border border-slate-700 col-start-2 row-start-4 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
              <SiFlutter className="fill-blue-400" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white bg-black p-2 shadow shadow-emerald-400  grid grid-cols-2 w-full items-center font-bold">
          <span className="text-xs uppercase text-primary drop-shadow-primary">Powered by Next.js</span>
          <a href="https://github.com/supremedeity/portfolio" target="_blank"><SiGithub className="text-lg" /></a>
        </div>
      </div>
    </>
  );
}
