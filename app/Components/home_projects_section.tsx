import { FaGithub, FaLock } from "react-icons/fa6";
import Image from "next/image";

export function HomeProjectsSection() {
    return <div className="shadow shadow-emerald-400 snap-start ">
        <div className="h-full bg-black/80 flex flex-col justify-around w-full gap-y-12">
          <span className="mt-12 sm:mb-0 mb-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
            PROJECTS
          </span>
          <div className="self-center text-white grid sm:grid-cols-2 sm:gap-x-16 gap-y-16 mb-16 mx-8">
            <div className="">
              <a href="https://urbane.supdeity.com" target="_blank">
                <Image
                  className="rounded hover:brightness-75 w-[512px]"
                  src="/urbane.png"
                  alt="urbane preview"
                  width="1356"
                  height="629"
                />
              </a>
              <div className="flex items-center justify-between">
                <span className="text-md text-gray-300 sm:text-lg uppercase font-bold">
                  Urbane
                </span>
                <a
                  href="https://github.com/supremedeity/urbane"
                  target="_blank"
                >
                  <FaGithub className="hover:fill-gray-300 text-lg transition-colors duration-100 ease-in" />
                </a>
              </div>
              <span className="text-sm text-primary font-semibold">
                Modern dashboard developed using NextJS
              </span>
            </div>
            <div className="">
              <Image
                className="rounded hover:brightness-75 w-[512px]"
                src="/siminventory.png"
                alt="siminventory preview"
                width="1356"
                height="629"
              />
              <div className="flex items-center justify-between">
                <span className="text-md text-gray-300 sm:text-lg uppercase font-bold">
                  Siminventory
                </span>
                <span className="flex text-sm items-center gap-x-1 uppercase font-bold text-gray-300">
                  <FaLock />
                  Private
                </span>
              </div>
              <span className="text-sm text-primary font-semibold">
                A inventory management app for the future
              </span>
            </div>
            <div className="">
              <a href="https://maestro.supdeity.com" target="_blank">
                <Image
                  className="rounded hover:brightness-75 w-[512px]"
                  src="/maestro.png"
                  alt="maestro preview"
                  width="1356"
                  height="629"
                />
              </a>
              <div className="flex items-center justify-between">
                <span className="text-md text-gray-300 sm:text-lg uppercase font-bold">
                  Maestro
                </span>
                <a
                  href="https://github.com/supremedeity/maestro"
                  target="_blank"
                >
                  <FaGithub className="hover:fill-gray-300 text-lg transition-colors duration-100 ease-in" />
                </a>
              </div>
              <span className="text-sm text-primary font-semibold">
                A Stylish E-Commerce site template
              </span>
            </div>
            <div className="">
              <a href="https://screenok.vercel.app" target="_blank">
                <Image
                  className="rounded hover:brightness-75 w-[512px]"
                  src="/screenok.png"
                  alt="screenok preview"
                  width="1356"
                  height="629"
                />
              </a>
              <div className="flex items-center justify-between">
                <span className="text-md text-gray-300 sm:text-lg uppercase font-bold">
                  Screenok
                </span>
                <a
                  href="https://github.com/supremedeity/screenok"
                  target="_blank"
                >
                  <FaGithub className="hover:fill-gray-300 text-lg transition-colors duration-100 ease-in" />
                </a>
              </div>
              <span className="text-sm text-primary font-semibold ">
                Generate Mockups from your screenshots
              </span>
            </div>
          </div>
        </div>
      </div>;
}