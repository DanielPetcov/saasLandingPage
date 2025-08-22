import { headerLinksdata } from "@/data/headerLinks";
import Logo from "../logo";
import NavBarBurger from "./navBarBurger";

import { motion } from "motion/react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-transparent">
      <div>
        <Logo classes="text-2xl lg:text-4xl" />
      </div>
      <div className="lg:hidden">
        <NavBarBurger />
      </div>
      <div className="hidden lg:flex items-center gap-4">
        {headerLinksdata.map((item, index) => (
          <motion.a
            href={item.link}
            key={index}
            whileHover={{
              color: "#171717",
              transition: {
                duration: 0.2,
              },
            }}
            className="text-[#A6A6A6] p-2"
          >
            {item.title}
          </motion.a>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <button className="p-2 cursor-pointer">Login</button>
        <motion.button
          whileHover={{
            backgroundColor: "#48a380",
          }}
          className="p-2 bg-main rounded-lg text-neutral-50 cursor-pointer"
        >
          Signup
        </motion.button>
      </div>
    </div>
  );
}
