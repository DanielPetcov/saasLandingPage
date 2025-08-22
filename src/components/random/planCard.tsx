import ActionButton from "../buttons/actionButton";
import BulletCheck from "./bulletCheck";

import { AnimatePresence, motion } from "motion/react";

interface PlansDataType {
  title: string;
  about: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  buttonText: string;
  isMain: boolean;
}

export default function PlanCard({
  data,
  active,
}: {
  data: PlansDataType;
  active: "monthly" | "yearly";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 1,
      }}
      animate={{
        scale: data.isMain ? 1.05 : 1,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
          type: "spring",
        },
      }}
      viewport={{
        once: true,
      }}
      className={`relative overflow-hidden rounded-2xl p-4 shadow-md h-full will-change-transform transform-gpu ${
        data.isMain ? "bg-main" : "bg-white"
      }`}
    >
      {data.isMain && (
        <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 h-[100%] aspect-square bg-[#5ac79d] z-0 rounded-full" />
      )}
      <div className="flex flex-col gap-8 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div
            className={`text-center font-semibold text-2xl ${
              data.isMain ? "text-neutral-50" : ""
            }`}
          >
            {data.title}
          </div>
          <div
            className={`text-center w-2/3 ${
              data.isMain ? "text-neutral-50" : "text-[#A6A6A6]"
            }`}
          >
            {data.about}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, type: "spring" }}
              className={`flex gap-2 ${
                data.isMain ? "text-neutral-50" : "text-[#A6A6A6]"
              }`}
            >
              <span className="text-xs">$</span>
              <span className="text-4xl font-semibold">
                {active === "yearly" ? data.price.yearly : data.price.monthly}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className="p-5 rounded-lg flex flex-col gap-5"
          style={{
            backgroundColor: data.isMain ? "white" : "#F9FAFB",
          }}
        >
          <div className="flex flex-col gap-6">
            {data.features.map((feature, index) => (
              <BulletCheck text={feature} key={index} />
            ))}
          </div>
          <ActionButton text={data.buttonText} borderRadius={16} />
        </div>
      </div>
    </motion.div>
  );
}
