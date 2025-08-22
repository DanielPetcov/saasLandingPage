import { type LucideIcon } from "lucide-react";
import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";

interface IconInterface {
  IconLucide: LucideIcon;
  iconColor?: string;
  iconSize?: number;
  initialOffSet?: number;
  className?: string;
  delay?: number;
}

export default function SquareTag({
  IconLucide,
  iconColor,
  iconSize,
  initialOffSet,
  className,
  delay,
}: IconInterface) {
  const controls = useAnimationControls();

  useEffect(() => {
    const runAnimations = async () => {
      await controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
        },
      });

      await controls.start({
        y: [0, -10, 0],
        rotate: [0, 2, 0],
        transition: {
          duration: 2,
          delay: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      });
    };

    runAnimations();

    return () => controls.stop();
  }, []);

  return (
    <motion.div
      initial={{
        x: initialOffSet ? initialOffSet : 0,
        opacity: 0,
      }}
      animate={controls}
      className={`w-fit rounded-lg ${className}`}
    >
      <IconLucide color={iconColor} size={iconSize} />
    </motion.div>
  );
}
