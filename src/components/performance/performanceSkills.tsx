import type { LucideIcon } from "lucide-react";
import { motion, type Variants } from "motion/react";

interface PerfomanceSkillsParams {
  title: string;
  description: string;
  iconColor?: string;
  Icon: LucideIcon;
  animDelay?: number;
  isDesktop: boolean;
}

const variants: Variants = {
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  mobile_hidden: {
    x: -200,
    opacity: 0,
  },
  desktop_hidden: {
    y: 100,
    opacity: 0,
  },
};

export default function PerformanceSkills({
  title,
  description,
  iconColor,
  Icon,
  animDelay,
  isDesktop,
}: PerfomanceSkillsParams) {
  return (
    <motion.div
      variants={variants}
      initial={isDesktop ? "desktop_hidden" : "mobile_hidden"}
      whileInView={"visible"}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
        delay: animDelay,
      }}
      className="grid grid-cols-[auto_auto] gap-2 w-fit will-change-transform transform-gpu"
    >
      <div className="bg-neutral-50 shadow-md w-fit h-fit p-4">
        <Icon color={iconColor ? iconColor : "#54BD95"} />
      </div>
      <div>
        <div className="font-bold text-lg">{title}</div>
        <div className="text-[#A6A6A6]">{description}</div>
      </div>
    </motion.div>
  );
}
