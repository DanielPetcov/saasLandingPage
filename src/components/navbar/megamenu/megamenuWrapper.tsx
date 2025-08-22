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
            x: "-100%",
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "-100%",
          }}
          transition={{
            duration: 0.5,
          }}
          className="fixed top-0 w-full max-h-screen h-full z-100 will-change-transform transform-gpu"
        >
          <MegaMenu />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
