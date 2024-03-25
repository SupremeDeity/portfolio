import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoCPlusPlus,
  BiLogoPython,
  BiLogoReact,
} from "react-icons/bi";
import { FaRust } from "react-icons/fa6";
import { SiDart, SiNextdotjs, SiPrisma, SiFlutter } from "react-icons/si";

export function HomeSkillsSection() {
  return (
    <div className="sm:h-dvh shadow shadow-emerald-400 snap-start">
      <div className="h-full bg-black/90 flex flex-col justify-around w-full">
        <span className="mt-12 sm:mb-0 mb-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
          Skills
        </span>
        <div className="mb-12 sm:m-auto grid grid-cols-4 grid-rows-4 gap-y-4 sm:gap-x-12 gap-x-6 text-3xl place-items-center sm:mx-auto mx-4">
          <div className="border border-slate-700 row-span-2 text-white bg-gray-800 w-max p-4 rounded hover:bg-gray-700 transition-all">
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
  );
}
