import Reviews from "../components/reviews";
import PerformanceWrapper from "../components/performance/performanceWrapper";

export default function SecondSection() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] lg:grid-cols-[55%_45%] lg:grid-rows-[auto-auto] gap-8 px-4 py-14 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="font-semibold text-2xl text-center lg:text-left lg:text-5xl">
          How we support our partners all over the world
        </div>
        <div className="text-[#A6A6A6] font-medium text-center text-xs md:text-base lg:text-left">
          SaaS become a common delivery model for many business application,
          including office software, messaging software, payroll processing
          software, DBMS software, management software
        </div>
      </div>
      <PerformanceWrapper />
      <div className="flex justify-center lg:justify-start gap-10 lg:col-span-1 lg:row-start-2 lg:row-end-3">
        <Reviews author="databricks" rating={4.9} />
        <Reviews author="Chainalysis" rating={4.8} />
      </div>
    </div>
  );
}
