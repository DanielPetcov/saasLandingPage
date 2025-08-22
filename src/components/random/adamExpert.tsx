import { MessageCircle } from "lucide-react";
import { useAnimationControls } from "motion/react";
import { useEffect } from "react";

import { motion } from "motion/react";

export default function AdamExpert({ delay }: { delay?: number }) {
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
      className="hidden lg:block absolute top-10 -left-20 bg-neutral-50 shadow-md p-2 w-fit rounded-lg"
    >
      <div className="flex gap-4 items-center">
        <img src="/images/dude.svg" alt="dude" />
        <div className="flex flex-col gap-2">
          <span className="text-sm">Amanda Young</span>
          <span className="text-xs text-[#A9A7B6]">Expert Saving Money</span>
        </div>
        <div className="p-3 rounded-full bg-main">
          <MessageCircle size={16} color="#fafafa" />
        </div>
      </div>
    </motion.div>
  );
}
