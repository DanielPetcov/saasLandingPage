import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ActionButton({
  text,
  backgroundColor,
  textColor,
  hoverColor,
  borderRadius,
  className,
}: {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  borderRadius?: number;
  className?: string;
}) {
  const [bgColor, setBgColor] = useState("#54BD95");
  useEffect(() => {
    if (backgroundColor) setBgColor(backgroundColor);
  }, [backgroundColor]);

  const handleOnMouseOver = () => {
    if (hoverColor) setBgColor(hoverColor);
    else setBgColor("#48a380");
  };

  const handleOnMouseLeave = () => {
    if (backgroundColor) setBgColor(backgroundColor);
    else setBgColor("#54BD95");
  };

  return (
    <motion.button
      className={`py-3 px-5 cursor-pointer ${
        !borderRadius && "rounded-full"
      } ${className}`}
      style={{
        color: textColor ? textColor : "#f5f5f5",
        borderRadius: borderRadius,
      }}
      animate={{
        backgroundColor: bgColor,
      }}
      transition={{
        duration: 0.3,
      }}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
    >
      <span>{text}</span>
    </motion.button>
  );
}
