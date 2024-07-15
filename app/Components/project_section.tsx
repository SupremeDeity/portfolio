"use client";
import { FaGithub, FaLock } from "react-icons/fa6";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { useCallback, useEffect, useState } from "react";

export function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

 const onSelect = useCallback(() => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
  }, [api])

 useEffect(() => {
  if (!api) return
  onSelect()
  api.on('select', onSelect)
  return () => {
    api.off('select', onSelect)
  }
}, [api, onSelect])

  
  return (
    <div className="shadow shadow-emerald-400 snap-start h-full">
      <div className="h-full bg-black/80 flex flex-col items-center justify-center w-full">
        <span className="mt-12 mb-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
          PROJECTS
        </span>
        <div className="text-white overflow-hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnFocusIn: true,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
              ClassNames({ inView: "brightness-50", snapped: "embla__snapped", draggable: "", dragging: ""})
            ]}
          >
            <CarouselContent className="-ml-12">
              <CarouselItem  className="pl-12 max-w-[800px] min-w-[60%] shrink ">
                <a href="https://urbane.supdeity.com" target="_blank">
                  <Image
                    className="rounded transition-transform"
                    src="/urbane.webp"
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
              </CarouselItem>
              <CarouselItem  className="pl-12 max-w-[800px] min-w-[60%] shrink ">
                <a href="https://devtools.supdeity.com" target="_blank">
                  <Image
                    className="rounded transition-transform"
                    src="/devtools.webp"
                    alt="devtools preview"
                    width="1356"
                    height="629"
                  />
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-md text-gray-300 sm:text-lg uppercase font-bold">
                    DevTools
                  </span>
                  <a
                    href="https://github.com/supremedeity/devtools"
                    target="_blank"
                  >
                    <FaGithub className="hover:fill-gray-300 text-lg transition-colors duration-100 ease-in" />
                  </a>
                </div>
                <span className="text-sm text-primary font-semibold">
                  Useful tools of all kinds for developers and students.
                </span>
              </CarouselItem>
              <CarouselItem className="pl-12 max-w-[800px] min-w-[60%] shrink">
                <div>
                  <Image
                    className="rounded"
                    src="/siminventory.webp"
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
              </CarouselItem>
              <CarouselItem className="pl-12 max-w-[800px] min-w-[60%] shrink">
                <div>
                  <a href="https://maestro.supdeity.com" target="_blank">
                    <Image
                      className="rounded"
                      src="/maestro.webp"
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
              </CarouselItem>
              <CarouselItem  className="pl-12 max-w-[800px] min-w-[60%] shrink">
                <div>
                  <a href="https://screenok.vercel.app" target="_blank">
                    <Image
                      className="rounded"
                      src="/screenok.webp"
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
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
