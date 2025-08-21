import { ChartNoAxesColumn, CircleCheck, Image } from "lucide-react";
import BulletCheck from "../components/random/bulletCheck";
import { benefitsData } from "../data/benefits";
import SquareTag from "../components/squareTag";

export default function BenefitsSection() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-10 w-fit mx-auto">
        <div className="font-bold text-4xl text-center">
          What Benifit Will You Get
        </div>

        <div className="relative w-fit mx-auto">
          <img src="/images/laptop.png" alt="laptop" className="rounded-2xl" />
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-fit p-2 rounded-lg shadow-md bg-neutral-50 flex items-center gap-6">
            <CircleCheck color="#2B9B5B" />
            <div className="text-sm text-nowrap">Money Transfer Succesfull</div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <SquareTag
              iconColor="#f5f5f5"
              iconSize={20}
              className="bg-main rounded-lg p-2 -rotate-10"
              IconLucide={Image}
            />
          </div>
          <div className="absolute top-10 right-4 bg-neutral-50 shadow-md p-2 w-fit rounded-lg flex flex-col gap-2">
            <div className="text-xs text-[#A9A7B6]">Total income</div>
            <div className="flex items-center gap-6 justify-between">
              <div>$245.00</div>
              <ChartNoAxesColumn size={18} color="#54bd95" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {benefitsData.map((item, index) => (
            <BulletCheck text={item.text} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
