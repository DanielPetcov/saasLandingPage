import { useEffect } from "react";
import { collaboratorsData } from "../data/collaborators";
import { motion, useAnimationControls, useMotionValue } from "motion/react";
import { useMeasure } from "@uidotdev/usehooks";

export default function CollaboratorsSection() {
  const xTranslation = useMotionValue(0);
  const [ref, { width }] = useMeasure();

  const controls = useAnimationControls();

  useEffect(() => {
    if (!width) return;

    let finalPosition = -width - 48;

    const runAnimation = async () => {
      await controls.start({
        x: [xTranslation.get(), finalPosition],
        transition: {
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        },
      });
    };

    runAnimation();

    return () => controls.stop();
  }, [xTranslation, width]);

  return (
    <div className="flex flex-col items-center gap-5 lg:gap-16 max-w-screen px-4">
      <div className="font-bold text-center text-2xl lg:text-4xl ">
        More than 25,000 teams use Collabs
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 min-w-max will-change-transform transform-gpu"
          animate={controls}
        >
          <div className="flex gap-12" ref={ref}>
            {collaboratorsData.map((item) => (
              <img key={item.id} src={item.img} className="h-8 lg:h-12" />
            ))}
          </div>

          <div className="flex gap-12">
            {collaboratorsData.map((item) => (
              <img
                key={`dup-${item.id}`}
                src={item.img}
                className="h-8 lg:h-12"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
