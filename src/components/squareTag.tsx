import { type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface IconInterface {
  IconLucide: LucideIcon;
  iconColor?: string;
  iconSize?: number;
  initialOffSet?: number;
  className?: string;
}

export default function SquareTag({
  IconLucide,
  iconColor,
  iconSize,
  initialOffSet,
  className,
}: IconInterface) {
  return (
    <motion.div
      initial={{
        x: initialOffSet ? initialOffSet : 0,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`w-fit rounded-lg ${className}`}
    >
      <IconLucide color={iconColor} size={iconSize} />
    </motion.div>
  );
}
