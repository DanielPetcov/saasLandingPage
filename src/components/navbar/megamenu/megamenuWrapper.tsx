import { useMegaMenuContext } from "../../../hooks/useMegaMenuContext";
import MegaMenu from "./megaMenu";

export default function MegamenuWrapper() {
  const { show, updateValue } = useMegaMenuContext();

  if (!show) return <></>;

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen">
      <div
        onClick={updateValue}
        className="absolute top-0 left-0 w-full min-h-screen bg-neutral-500 opacity-20"
      />
      <MegaMenu />
    </div>
  );
}
