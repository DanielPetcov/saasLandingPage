import { createPortal } from "react-dom";
import Navbar from "./components/navbar/navbar";
import MegamenuWrapper from "./components/navbar/megamenu/megamenuWrapper";
import { MegaMenuContext } from "./context/megaMenuContext";
import { useState } from "react";
import HeroSection from "./layout/heroSection";
import SecondSection from "./layout/secondSection";

function App() {
  const megaMenuDiv = document.getElementById("megamenu");
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-neutral-50 w-full min-h-screen relative">
      <div
        className="absolute top-0 left-0 h-2/2 -translate-x-1/2 -translate-y-1/2 aspect-square z-0 rounded-full
         bg-radial from-main from-10% to-neutral-50 opacity-30 blur-xl"
      />
      <div className="relative z-100">
        <MegaMenuContext.Provider
          value={{
            show: visible,
            updateValue: () => setVisible(!visible),
          }}
        >
          <Navbar />
          {createPortal(
            <MegamenuWrapper />,
            megaMenuDiv ? megaMenuDiv : document.body
          )}
        </MegaMenuContext.Provider>
      </div>

      <div className="relative z-10 overflow-hidden">
        <div
          className="absolute bottom-0 right-0 h-2/3 translate-x-1/3 translate-y-1/3 aspect-square z-0 rounded-full
         bg-radial from-main from-10% to-neutral-50 opacity-30 blur-xl"
        />
        <HeroSection />
      </div>

      <div>
        <SecondSection />
      </div>
    </div>
  );
}

export default App;
