import PerformanceSkills from "./performanceSkills";
import { useMediaQuery } from "@uidotdev/usehooks";
import { performanceData } from "../../data/performance";

export default function PerformanceWrapper() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex flex-col gap-5 mx-auto lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:px-2">
      {performanceData.map((data, index) => (
        <PerformanceSkills
          Icon={data.icon}
          title={data.title}
          description={data.description}
          animDelay={0.2 * index}
          isDesktop={isDesktop}
          key={index}
        />
      ))}
    </div>
  );
}
