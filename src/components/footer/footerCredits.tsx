import { Dot } from "lucide-react";

export default function FooterCredits() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col-reverse gap-2 items-center lg:flex-row lg:justify-between">
      <div className="text-center lg:text-left flex flex-col lg:flex-row lg:gap-2 ">
        <span>@{currentYear} Mady by Petcov Daniel.</span>
        <div className="flex gap-1">
          <span>Design credits to</span>
          <a
            href="https://www.figma.com/community"
            className="hover:underline"
            target="_blank"
          >
            Figma community
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a href="#" className="hover:underline">
          Terms and Coditions
        </a>
        <Dot />
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
