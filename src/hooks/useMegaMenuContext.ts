import { useContext } from "react";
import { MegaMenuContext } from "../context/megaMenuContext";

export function useMegaMenuContext() {
  const megaContext = useContext(MegaMenuContext);

  if (megaContext !== undefined) return megaContext;

  throw new Error("megaMenu context has no value");
}
