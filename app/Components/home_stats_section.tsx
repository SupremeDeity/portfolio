import Image from "next/image";
import Link from "next/link";
import { BiBook, BiGitPullRequest, BiSolidStar, BiUser } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { VscIssues } from "react-icons/vsc";
import { getGithubStats } from "../actions/github_stats";

export async function HomeStatsSection() {
  const stats = await getGithubStats();

  return (
    <div className="sm:h-dvh shadow shadow-emerald-400">
      <div className="h-full max-h-max bg-black/60 flex flex-col justify-evenly snap-start">
        <span className="mt-12 uppercase drop-shadow-primary font-bold text-2xl text-primary self-center">
          Stats
        </span>
        <div className="text-white h-full p-6 gap-4 grid grid-rows-2 grid-cols-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-8 lg:grid-rows-2">
          <Box className="row-span-2 col-span-2 flex flex-col justify-evenly items-center">
            <div className="header w-full h-full text-center flex flex-col justify-center">
              <Image
                className="w-16 h-16 mx-auto"
                width={64}
                height={64}
                src={
                  "https://avatars.githubusercontent.com/supremedeity?size=64"
                }
                alt="Github Avatar"
              />
              <h3 className="font-semibold sm:text-xl mb-8">SupremeDeity</h3>
            </div>
            <div className="text-center h-full flex flex-col justify-center p-4 text-sm sm:text-base">
              <h4 className="font-bold">About Me</h4>
              <h6 className=" text-primary">
                A student working and learning different things that interest
                me, from website to mobile and desktop.
              </h6>
            </div>
            <div className="flex flex-col justify-center p-6">
              <Link
                target="_blank"
                className="hover:text-gray-300/80 ease-in transition-colors"
                href={"https://github.com/supremedeity"}
              >
                <BsGithub className="size-6 sm:size-8" />
              </Link>
            </div>
          </Box>
          <Box className="flex flex-col justify-center items-center gap-6 text-gray-400 text-xs sm:text-xl lg:col-span-2">
            <div>
              <BiUser className="size-8 mx-auto" />
              <span className="font-bold ">
                Total Followers<br /><br />
              </span>
            </div>
            <span className="font-bold text-primary">{stats.followers.toString().padStart(2, "0")}</span>
          </Box>
          <Box className="flex flex-col justify-center items-center gap-6 text-gray-400 text-xs sm:text-xl lg:col-span-2">
            <div>
              <BiSolidStar className="size-8 mx-auto" />
              <span className="font-bold ">
                Total Stars<br /><br />
              </span>
            </div>
            <span className="font-bold text-primary">{stats.totalStars.toString().padStart(2, "0")}</span>
          </Box>
          <Box className="flex flex-col justify-center items-center gap-6 text-gray-400 text-xs sm:text-xl lg:col-span-2">
            <div>
              <BiGitPullRequest className="size-8 mx-auto" />
              <span className="font-bold ">
                Total PRs<br /><br />
              </span>
            </div>
            <span className="font-bold text-primary">{stats.totalPRs.toString().padStart(2, "0")}</span>
          </Box>
          <Box className="flex flex-col justify-center items-center gap-6 text-gray-400 text-xs sm:text-xl lg:col-start-4 lg:col-span-2">
            <div>
              <VscIssues className="size-8 mx-auto" />
              <span className="font-bold ">
                Total Issues<br /><br/>
              </span>
            </div>
            <span className="font-bold text-primary">{stats.totalIssues.toString().padStart(2, "0")}</span>
          </Box>
          <Box className="flex flex-col justify-center p-4 sm:p-0 items-center gap-6 text-gray-400 text-xs sm:text-xl lg:col-start-6 lg:col-span-2">
            <div className="flex flex-col text-center">
              <BiBook className="size-6 sm:size-8 mx-auto" />
              <span className="font-bold text-center">
                Total Contributions
              </span>
              <span>
                (last year)
              </span>
            </div>
            <span className="font-bold text-primary">{stats.totalContributions.toString().padStart(2, "0")}</span>
          </Box>
        </div>
      </div>
    </div>
  );
}

function Box(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={"box " + props.className}>{props.children}</div>;
}
