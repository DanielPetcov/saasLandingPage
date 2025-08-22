import { createPortal } from "react-dom";
import Navbar from "./components/navbar/navbar";
import MegamenuWrapper from "./components/navbar/megamenu/megamenuWrapper";
import { MegaMenuContext } from "./context/megaMenuContext";
import { useState } from "react";
import HeroSection from "./layout/heroSection";
import SecondSection from "./layout/secondSection";
import FeaturesSection from "./layout/featuresSection";
import BenefitsSection from "./layout/benefitsSection";
import PlanSection from "./layout/planSection";
import Footer from "./layout/footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  const megaMenuDiv = document.getElementById("megamenu");
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-neutral-50 w-full min-h-screen relative overflow-hidden font-display">
      <div
        className="absolute top-0 left-0 h-2/3 -translate-x-1/2 -translate-y-1/2 aspect-square z-0 rounded-full
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

      <div className="bg-[#F9F8FE] relative z-10">
        <SecondSection />
      </div>

      <div className="relative z-10">
        <FeaturesSection />
        <BenefitsSection />
        <PlanSection />
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
