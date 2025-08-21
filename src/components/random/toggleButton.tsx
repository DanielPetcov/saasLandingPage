import { motion, useAnimationControls } from "motion/react";
import { useEffect, useState, type Dispatch } from "react";

export default function ToggleButton({
  active,
  setActive,
}: {
  active: "monthly" | "yearly";
  setActive: Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}) {
  const [activeAnimation, setActiveAnimation] = useState(false);
  const controls = useAnimationControls();

  const handleChange = () => {
    if (activeAnimation) return;
    setActive((prev) => (prev === "monthly" ? "yearly" : "monthly"));
    setActiveAnimation(true);
  };

  useEffect(() => {
    if (!activeAnimation) return;

    controls
      .start({
        translateX: active === "monthly" ? 4 : -4,
        left: active === "monthly" ? 0 : "unset",
        right: active === "monthly" ? "unset" : 0,
        transition: {
          type: "spring",
          duration: 0.5,
          stiffness: 300,
          damping: 30,
        },
      })
      .then(() => setActiveAnimation(false));
    return () => controls.stop();
  }, [activeAnimation]);

  useEffect(() => {
    controls.start({
      translateX: -4,
      right: 0,
    });

    return () => controls.stop();
  }, []);

  return (
    <button
      className="relative grid grid-cols-2 rounded-lg shadow-md p-5 px-1 cursor-pointer bg-neutral-50"
      onClick={handleChange}
    >
      <motion.div
        animate={controls}
        className="absolute top-1/2 -translate-y-1/2 h-[calc(100%_-_10px)] w-[calc(50%_-_4px)] bg-main rounded-lg"
      />
      <div
        className="relative z-10 px-5"
        style={{
          color: active === "monthly" ? "#fafafa" : "unset",
          transition: "all .3s ease",
        }}
      >
        Bill Monthly
      </div>
      <div
        className="relative z-10 px-5"
        style={{
          color: active === "monthly" ? "unset" : "#fafafa",
        }}
      >
        Bill Yearly
      </div>
    </button>
  );
}
