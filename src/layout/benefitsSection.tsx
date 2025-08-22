import { CircleCheck, Image } from "lucide-react";
import BulletCheck from "../components/random/bulletCheck";
import { benefitsData } from "../data/benefits";
import SquareTag from "../components/squareTag";
import AdamExpert from "@/components/random/adamExpert";
import TotalIncome from "@/components/random/totalIncom";

export default function BenefitsSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-10 w-fit mx-auto lg:w-full lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
        <div className="text-center lg:text-left lg:h-fit">
          <span className="font-bold text-4xl lg:text-5xl">
            What Benifits Will <br className="hidden lg:block" /> You Get
          </span>
        </div>

        <div className="relative w-fit mx-auto lg:row-span-2 lg:col-start-2 lg:col-end-3">
          <img src="/images/laptop.png" alt="laptop" className="rounded-2xl" />
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-fit p-2 rounded-lg shadow-md bg-neutral-50 flex items-center gap-4">
            <CircleCheck color="#2B9B5B" />
            <div className="text-sm text-nowrap lg:text-base">
              Money Transfer Succesful
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-2 lg:-left-14">
            <SquareTag
              iconColor="#f5f5f5"
              iconSize={20}
              className="bg-main rounded-lg p-2 -rotate-10"
              IconLucide={Image}
            />
          </div>
          <TotalIncome />
          <AdamExpert delay={0.2} />
        </div>

        <div className="flex flex-col gap-4 h-full lg:gap-8">
          {benefitsData.map((item, index) => (
            <BulletCheck text={item.text} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
