import { footerQuotesData } from "@/data/footerQuotes";
import { CirclePlay } from "lucide-react";

export default function FooterText() {
  return (
    <div className="lg:flex flex-col gap-8">
      <div className="font-bold text-3xl text-center lg:text-left lg:text-5xl">
        People are Saying <br /> About Us
      </div>
      <div className="hidden lg:flex flex-col gap-10 text-[#A6A6A6]">
        <div>
          Everything you need to accept to payment and grow your money of manage
          anywhere on planet
        </div>
        <div>
          <img src="/images/quotes.svg" alt="quotes" />
        </div>
        <div>
          <span>
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time
          </span>
          <img
            src="/images/heareyes.png"
            alt="heart eyes"
            className="inline-block w-5 ml-2"
          />
        </div>
        <div>_ Aria Zinanrio</div>

        <div className="flex items-center gap-4">
          {[...footerQuotesData].map((item, index) => {
            if (item.isImg) {
              return <img src={item.img} key={index} />;
            }
            return (
              <CirclePlay
                key={index}
                size={70}
                strokeWidth={1}
                className="cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
