import Logo from "../logo";
import NavBarBurger from "./navBarBurger";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-transparent">
      <div>
        <Logo classes="text-2xl lg:text-4xl" />
      </div>
      <div className="lg:hidden">
        <NavBarBurger />
      </div>
    </div>
  );
}
