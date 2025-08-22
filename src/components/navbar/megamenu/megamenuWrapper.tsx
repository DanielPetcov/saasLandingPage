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
            left: "-100%",
          }}
          animate={{
            left: 0,
          }}
          exit={{
            left: "-100%",
          }}
          transition={{
            duration: 0.5,
          }}
          className="absolute top-0 w-full max-h-screen h-full z-100"
        >
          <MegaMenu />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
