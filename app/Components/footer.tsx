import { FaCodeCommit, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
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
  );
}
