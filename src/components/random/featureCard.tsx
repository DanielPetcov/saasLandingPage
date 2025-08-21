import { useMeasure } from "@uidotdev/usehooks";
import type { ComponentType, SVGProps } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  Cover: ComponentType<SVGProps<SVGSVGElement>>;
}

export default function FeatureCard({
  title,
  description,
  Cover,
}: FeatureCardProps) {
  const [ref, { width }] = useMeasure();

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="max-w-full h-auto">
        <Cover
          className="max-w-full h-fit rounded-3xl overflow-hidden"
          ref={ref}
        />
      </div>
      <div
        style={{
          maxWidth: width ? width : "none",
        }}
      >
        <div className="font-bold text-2xl text-center lg:text-left">
          {title}
        </div>
        <div className="text-[#A6A6A6] text-center lg:text-left">
          {description}
        </div>
      </div>
    </div>
  );
}
