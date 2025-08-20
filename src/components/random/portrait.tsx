import { Database, MessageSquare, Check } from "lucide-react";
import SquareTag from "../squareTag";
import CreditCard from "./creditCard";
import { motion } from "motion/react";

export default function Portrait() {
  return (
    <div className="relative">
      <SquareTag
        IconLucide={Database}
        iconColor="#F8F8FA"
        initialOffSet={40}
        className="hidden lg:block z-10 absolute top-8 right-[-30px] p-4 bg-[#FBC75E] rotate-12"
      />
      <SquareTag
        IconLucide={Check}
        iconColor="#F8F8FA"
        initialOffSet={-40}
        className="hidden absolute z-10 lg:block top-[35%] left-[-70px] p-3 bg-[#4535AF] rotate-[-12deg]"
      />
      <SquareTag
        IconLucide={MessageSquare}
        iconColor="#F8F8FA"
        iconSize={16}
        initialOffSet={30}
        className="hidden absolute z-10 lg:block bottom-[-10px] right-[40px] p-2 bg-[#FFAA94] rotate-12"
      />
      <CreditCard
        initialOffSet={30}
        className="z-10 rotate-12 bottom-10 right-5 lg:right-[-60px]"
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="rounded-lg"
        src="/images/hero_dude.png"
        alt="hero dude"
      />
    </div>
  );
}
