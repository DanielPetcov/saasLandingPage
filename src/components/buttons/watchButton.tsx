import { CirclePlay } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function WatchButton({ text }: { text?: string }) {
  const [scale, setScale] = useState(1);

  const handleOnMouseOver = () => {
    setScale(1.1);
  };

  const handleOnMouseLeave = () => {
    setScale(1);
  };

  return (
    <button
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      className="flex items-center gap-2 cursor-pointer"
    >
      <motion.div
        animate={{
          scale,
        }}
      >
        <CirclePlay size={30} strokeWidth={1} />
      </motion.div>
      <span>{text}</span>
    </button>
  );
}
