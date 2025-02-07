import Logo from "@/components/Logo";
import { AlignJustify, CircleUser, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-white py-6 fixed top-9 left-0 right-0 px-4 h-16">
      <div className="flex items-center gap-4">
        <AlignJustify size={24} />
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <Search size={24} />
        <ShoppingCart size={24} />
        <CircleUser size={24} />
      </div>
    </header>
  );
};

export default Navbar;
