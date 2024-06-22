import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoCPlusPlus,
  BiLogoPython,
  BiLogoReact,
} from "react-icons/bi";
import { FaRust } from "react-icons/fa6";
import { SiDart, SiNextdotjs, SiPrisma, SiFlutter } from "react-icons/si";
import { SkillBox } from "./SkillBox";

export function HomeSkillsSection() {
  return (
    <div className="sm:h-dvh shadow shadow-emerald-400 snap-start">
      <div className="h-full bg-black/90 flex flex-col justify-around w-full">
        <span className="mt-12 sm:mb-0 mb-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
          Skills
        </span>
        <div className="mb-12 sm:m-auto grid grid-cols-4 grid-rows-4 gap-y-4 sm:gap-x-12 gap-x-6 text-3xl place-items-center sm:mx-auto mx-4">
          <SkillBox className="row-span-2">
            <BiLogoJavascript className="fill-yellow-400" />
          </SkillBox>
          <SkillBox>
            <BiLogoTypescript className="fill-blue-400" />
          </SkillBox>
          <SkillBox>
            <FaRust className="fill-orange-400" />
          </SkillBox>
          <SkillBox className="row-span-2">
            <BiLogoCPlusPlus className="fill-blue-400" />
          </SkillBox>
          <SkillBox className="row-span-2">
            <BiLogoPython className="fill-gray-400" />
          </SkillBox>
          <SkillBox className="row-span-2">
            <SiDart className="fill-blue-400" />
          </SkillBox>

          <SkillBox className="col-start-3 row-start-4 ">
            <BiLogoReact className="fill-blue-400" />
          </SkillBox>
          <SkillBox className="row-span-2 text-white">
            <SiNextdotjs className="" />
          </SkillBox>
          <SkillBox className="row-span-2">
            <SiPrisma className="fill-white rounded p-1 bg-blue-500" />
          </SkillBox>
          <SkillBox className="col-start-2 row-start-4 ">
            <SiFlutter className="fill-blue-400" />
          </SkillBox>
        </div>
      </div>
    </div>
  );
}


