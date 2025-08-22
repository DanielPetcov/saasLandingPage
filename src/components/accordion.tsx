import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

interface AccordionProps {
  title: string;
  links?: {
    link: string;
    title: string;
  }[];
}

export default function Accordion({ title, links }: AccordionProps) {
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  const handleClick = () => {
    if (isDesktop) return;
    setVisible(!visible);
  };

  const variants: Variants = {
    visible: {
      opacity: 1,
      height: "auto",
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <div className="flex flex-col border-1 border-neutral-100 lg:border-none p-2 rounded-lg w-full">
      <motion.button
        animate={{
          marginBottom: visible ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
        }}
        onClick={handleClick}
        className="lg:text-left lg:pb-2 cursor-pointer lg:cursor-auto"
      >
        {title}
      </motion.button>
      <AnimatePresence initial={false} mode="wait">
        {(visible || isDesktop) && (
          <motion.div
            initial={isDesktop ? "visible" : "hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={variants}
            transition={{
              duration: 0.3,
              type: "spring",
            }}
            className="flex flex-col gap-2 overflow-hidden"
          >
            {links &&
              links.map((link, index) => (
                <a
                  key={index}
                  className="hover:underline text-[#A6A6A6] text-center lg:text-left cursor-pointer"
                >
                  {link.title}
                </a>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
