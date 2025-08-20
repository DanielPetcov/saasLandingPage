import ActionButton from "../components/buttons/actionButton";
import WatchButton from "../components/buttons/watchButton";
import Portrait from "../components/random/portrait";
import SmileVector from "../components/random/smileVector";
import CollaboratorsSection from "./collaboratorsSection";

export default function HeroSection() {
  return (
    <div className="py-4 flex flex-col gap-14 lg:gap-36">
      <div className="px-4 max-w-screen-xl mx-auto flex flex-col gap-5 lg:gap-40 lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto]">
        <div className="flex flex-col gap-2 md:gap-6 lg:gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl text-center lg:text-left md:text-6xl lg:text-7xl">
              We’re here to Increase your Productivity
            </h1>
            <div className="hidden lg:block">
              <SmileVector />
            </div>
          </div>
          <div className="font-medium text-sm text-center md:text-md lg:text-left lg:text-lg lg:max-w-[90%]">
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </div>
        </div>

        <div className="mx-auto w-fit lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
          <Portrait />
        </div>
        <div className="flex items-center justify-center gap-8 lg:row-start-2 lg:row-end-3 lg:items-center lg:justify-start">
          <ActionButton text="Try free trial" />
          <WatchButton text="View Demo" />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <CollaboratorsSection />
      </div>
    </div>
  );
}
