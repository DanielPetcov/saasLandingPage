import { createContext } from "react";

interface MegaMenuContextInterface {
  show: boolean;
  updateValue: () => void;
}

export const MegaMenuContext = createContext<
  MegaMenuContextInterface | undefined
>(undefined);
