"use client";
import { FaGithub, FaLock } from "react-icons/fa6";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

export function ProjectsSection() {
  return (
    <div className="shadow shadow-emerald-400 snap-start h-full">
      <div className="h-full bg-black/80 flex flex-col items-center justify-center w-full">
        <span className="mt-12 mb-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
          PROJECTS
        </span>
        <div className="text-white overflow-hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                jump: false,
                delay: 2000,
                stopOnFocusIn: true,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
              ClassNames({
                inView: "brightness-50",
                snapped: "embla__snapped",
                draggable: "",
                dragging: "",
              }),
            ]}
          >
            <CarouselContent className="sm:-ml-12 -ml-4">
              <Item
                name="Urbane"
                src="https://urbane.supdeity.com"
                imageSrc="/urbane.webp"
                description="Modern dashboard developed using NextJS"
                githubSrc="https://github.com/SupremeDeity/urbane"
              />
              <Item
                name="DevTools"
                src="https://devtools.supdeity.com"
                imageSrc="/devtools.webp"
                description="Useful tools of all kinds for developers and students"
                githubSrc="https://github.com/supremedeity/devtools"
              />
              <Item
                name="Siminventory"
                imageSrc="/siminventory.webp"
                description="A inventory management app for the future"
              />
              <Item
                name="Maestro"
                src="https://maestro.supdeity.com"
                imageSrc="/maestro.webp"
                description="A Stylish E-Commerce site template"
                githubSrc="https://github.com/supremedeity/maestro"
              />
              <Item
                name="Screenok"
                src="https://screenok.supdeity.com"
                imageSrc="/screenok.webp"
                description="Generate Mockups from your screenshots"
                githubSrc="https://github.com/supremedeity/screenok"
              />
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );

  function Item({
    imageSrc,
    name,
    description,
    githubSrc,
    src,
  }: {
    imageSrc: string;
    name: string;
    description: string;
    githubSrc?: string;
    src?: string;
  }) {
    return (
      <CarouselItem className="sm:pl-12 max-w-[800px] min-w-[50%] sm:min-w-[60%] shrink ">
        <a href={src} target="_blank">
          <Image
            className="rounded"
            src={imageSrc}
            alt={`${name} preview`}
            width="1356"
            height="629"
          />
        </a>
        <div className="flex items-center justify-between">
          <span className="text-md text-gray-300 sm:text-lg uppercase font-bold">
            {name}
          </span>
          {githubSrc ? (
            <a href={githubSrc} target="_blank">
              <FaGithub className="hover:fill-gray-300 text-lg transition-colors duration-100 ease-in" />
            </a>
          ) : (
            <span className="flex text-sm items-center gap-x-1 uppercase font-bold text-gray-300">
              <FaLock />
              Private
            </span>
          )}
        </div>
        <span className="text-sm text-primary font-semibold">
          {description}
        </span>
      </CarouselItem>
    );
  }
}
