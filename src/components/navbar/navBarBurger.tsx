import { Menu } from "lucide-react";
import { useMegaMenuContext } from "../../hooks/useMegaMenuContext";

export default function NavBarBurger() {
  const { updateValue } = useMegaMenuContext();

  return (
    <button onClick={updateValue}>
      <Menu />
    </button>
  );
}
