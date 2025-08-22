import FooterForm from "../components/footer/form";
import Accordion from "../components/accordion";
import { footerData } from "../data/footerLinks";
import FooterEmailForm from "@/components/footer/footerEmailForm";
import FooterCredits from "@/components/footer/footerCredits";
import FooterText from "@/components/footer/footerText";

export default function Footer() {
  return (
    <div className="bg-[#161C28] text-neutral-50 px-5 py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 justify-between">
        <div className="grid grid-cols-1 gap-10 lg:gap-x-32 lg:grid-cols-2">
          <FooterText />
          <FooterForm />
          <FooterEmailForm />

          <div className="flex flex-col gap-4 lg:flex-row">
            {footerData.map((column, index) => (
              <Accordion
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        <FooterCredits />
      </div>
    </div>
  );
}
