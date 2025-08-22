import { X } from "lucide-react";
import Logo from "../../logo";
import { useMegaMenuContext } from "../../../hooks/useMegaMenuContext";
import { headerLinksdata } from "@/data/headerLinks";

import { motion } from "motion/react";

export default function MegaMenu() {
  const { updateValue } = useMegaMenuContext();

  return (
    <div className="absolute top-0 left-0 w-full h-full flex bg-neutral-100 p-4">
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex items-center justify-between">
          <Logo classes="text-xl" />
          <button onClick={updateValue}>
            <X />
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          {headerLinksdata.map((item, index) => (
            <motion.a
              href={item.link}
              key={index}
              whileHover={{
                backgroundColor: "#48a380",
              }}
              className="cursor-pointer text-center p-2 rounded-full bg-main text-neutral-100"
            >
              {item.title}
            </motion.a>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <motion.button
            whileHover={{
              backgroundColor: "#54bd95",
              color: "#f5f5f5",
              cursor: "pointer",
            }}
            className="p-2 border-2 border-main text-center rounded-2xl"
          >
            sign up
          </motion.button>
          <motion.button
            whileHover={{
              backgroundColor: "#48a380",
              cursor: "pointer",
            }}
            className="bg-main p-2 rounded-2xl text-neutral-50 text-center"
          >
            login
          </motion.button>
        </div>
      </div>
    </div>
  );
}
