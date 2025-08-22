import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";

export default function CreditCard({
  className,
  initialOffSet,
  delay,
}: {
  className?: string;
  initialOffSet?: number;
  delay?: number;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    const runAnimations = async () => {
      await controls.start({
        transform: "translateX(0)",
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
        },
      });

      await controls.start({
        transform: ["translateY(0)", "translateY(-10px)", "translateY(0)"],
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
        transform: initialOffSet ? `translateX(${initialOffSet})` : 0,
        opacity: 0,
      }}
      animate={controls}
      className={`absolute rounded-lg bg-[#161C28] min-w-28 p-2 flex flex-col justify-between gap-8 overflow-hidden will-change-transform ${className}`}
    >
      <div className="absolute w-20 h-20 -top-10 -right-10  bg-[#232937] rounded-full"></div>
      <div className="absolute w-24 h-24 -bottom-10 -left-10  bg-[#232937] rounded-full">
        <div className="absolute rounded-sm w-7 h-4 bg-white opacity-20 top-6 left-12" />
      </div>
      <div className="relative w-5 h-5">
        <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-neutral-50 opacity-80"></div>
        <div className="absolute top-0 left-1/2 w-5 h-5 rounded-full bg-neutral-50 opacity-80"></div>
      </div>
      <div className="flex flex-col text-neutral-100">
        <div className="text-[12px]">Credit Card</div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-[#D9D9D9]" />
            <div className="w-1 h-1 rounded-full bg-[#D9D9D9]" />
            <div className="w-1 h-1 rounded-full bg-[#D9D9D9]" />
            <div className="w-1 h-1 rounded-full bg-[#D9D9D9]" />
          </div>
          <div className="text-[10px]">1234</div>
        </div>
      </div>
      <div className="ml-auto text-[8px] text-neutral-100">09/25</div>
    </motion.div>
  );
}
