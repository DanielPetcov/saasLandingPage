import useEmblaCarousel from "embla-carousel-react";
import PlanCard from "../components/random/planCard";
import ToggleButton from "../components/random/toggleButton";
import { plansData } from "../data/plans";
import { useState } from "react";

export default function PlanSection() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    startIndex: 1,
    breakpoints: {
      "(min-width: 1024px)": {
        active: false,
      },
    },
  });
  const [active, setActive] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 items-center">
          <div className="font-bold text-4xl text-center">
            Choose Plan <br /> That’s Right For You
          </div>
          <div className="text-[#A6A6A6] font-semibold text-lg">
            Choose plan that works best for you, feel free to contact us
          </div>
          <ToggleButton active={active} setActive={setActive} />
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-8 lg:grid grid-cols-3">
            {plansData.map((plan, index) => (
              <div
                className="embla__slide grow-0 shrink-0 basis-[80%] md:basis-[50%] lg:basis-auto "
                key={index}
              >
                <PlanCard data={plan} active={active} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
