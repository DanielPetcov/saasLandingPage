import { useMeasure } from "@uidotdev/usehooks";
import type { ComponentType, SVGProps } from "react";

import { motion } from "motion/react";

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
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      className="flex flex-col gap-4 items-center"
    >
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
    </motion.div>
  );
}
