import { ChartNoAxesColumn } from "lucide-react";
import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";

export default function TotalIncome({ delay }: { delay?: number }) {
  const controls = useAnimationControls();

  useEffect(() => {
    const runAnimations = async () => {
      await controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 2,
          delay,
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
      animate={controls}
      className="absolute top-10 right-4 bg-neutral-50 shadow-md p-2 w-fit rounded-lg flex flex-col gap-2"
    >
      <div className="text-xs text-[#A9A7B6]">Total income</div>
      <div className="flex items-center gap-6 justify-between">
        <div>$245.00</div>
        <ChartNoAxesColumn size={18} color="#54bd95" />
      </div>
    </motion.div>
  );
}
