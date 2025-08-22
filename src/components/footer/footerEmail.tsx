import { ArrowRight } from "lucide-react";
import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";
import type { UseFormRegister } from "react-hook-form";

export default function FooterEmail({
  register,
  submited,
}: {
  register: UseFormRegister<{
    email: string;
  }>;
  submited: boolean;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (!submited) return;
    const handleAnimation = async () => {
      await controls.start({
        x: 40,
        transition: {
          duration: 0.3,
        },
      });

      controls.set({
        x: -40,
      });

      await controls.start({
        x: 0,
        transition: {
          duration: 0.3,
        },
      });
    };

    handleAnimation();

    return () => controls.stop();
  }, [submited]);

  return (
    <div className="border-2 border-[#A6A6A6] rounded-full p-1 pl-3 w-full">
      <div className="flex flex-1 items-center justify-between gap-4">
        <input
          type="email"
          {...register("email", { required: "can't be empty" })}
          placeholder="Enter your email here"
          className="grow-1 focus:outline-none"
        />
        <button
          className="rounded-full p-2 bg-main hover:bg-[#48a380] cursor-pointer overflow-hidden"
          type="submit"
        >
          <motion.div animate={controls}>
            <ArrowRight />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
