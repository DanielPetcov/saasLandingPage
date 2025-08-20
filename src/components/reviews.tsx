import { Star } from "lucide-react";
import type { JSX } from "react";
import { motion } from "motion/react";

export default function Reviews({
  author,
  rating,
}: {
  author: string;
  rating: number;
}) {
  if (rating < 0) {
    return <div>rating can not be negative</div>;
  }

  const returnStars = () => {
    const starsContainer: JSX.Element[] = [];

    for (let i = 0; i < Math.round(rating); i++) {
      starsContainer.push(<Star color="#FFC728" fill="#FFC728" />);
    }

    for (let i = Math.round(rating); i < 5; i++) {
      starsContainer.push(<Star color="#BBBBBB" fill="#BBBBBB" />);
    }

    return [...starsContainer];
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
        delay: 1,
      }}
      className="flex flex-col gap-3"
    >
      <div className="flex items-center gap-1">
        {Math.round(rating) >= 5
          ? [...Array(5)].map((_, index) => (
              <Star key={index} color="#FFC728" fill="#FFC728" />
            ))
          : returnStars()}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-semibold">{rating}</span>
        <span>/</span>
        <span>5 rating</span>
      </div>
      <div className="text-sm text-[#A6A6A6]">{author}</div>
    </motion.div>
  );
}
