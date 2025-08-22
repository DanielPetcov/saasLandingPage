import { useMegaMenuContext } from "../../../hooks/useMegaMenuContext";
import MegaMenu from "./megaMenu";

import { AnimatePresence, motion } from "motion/react";

export default function MegamenuWrapper() {
  const { show } = useMegaMenuContext();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            transform: "translateX(-100%)",
          }}
          animate={{
            transform: "translateX(0)",
          }}
          exit={{
            transform: "translateX(-100%)",
          }}
          transition={{
            duration: 0.5,
          }}
          className="absolute top-0 w-full max-h-screen h-full z-100 will-change-transform"
        >
          <MegaMenu />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
