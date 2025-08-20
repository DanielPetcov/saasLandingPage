import { X } from "lucide-react";
import Logo from "../../logo";
import { useMegaMenuContext } from "../../../hooks/useMegaMenuContext";

export default function MegaMenu() {
  const { updateValue } = useMegaMenuContext();

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex bg-neutral-100 p-4">
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <Logo classes="text-xl" />
          <button onClick={updateValue}>
            <X />
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <div>links</div>
          <div>links</div>
          <div>links</div>
          <div>links</div>
        </div>
        <div>
          <button>sign up</button>
          <button>login</button>
        </div>
      </div>
    </div>
  );
}
