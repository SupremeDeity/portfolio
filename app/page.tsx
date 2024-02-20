import { CrystalCanvas } from "./Components/crystal";

export default function Home() {
  return (
    <div className="">
      <main className="h-dvh bg-gradient-main">
        <div className="h-full bg-black/60 uppercase text-primary flex justify-evenly gap-x-48">
          <div className="flex flex-col justify-center">
            <span className="font-light text-[24px]">Portfolio</span>
            <span className="font-extrabold text-[64px] leading-[64px] w-max drop-shadow-primary">
              Muhammad
              <br />
              Mohsin
            </span>
          </div>
          <div className="w-80">
            <CrystalCanvas />
          </div>
        </div>
      </main>
      <div className="h-dvh">
        Test
      </div>
    </div>
  );
}
