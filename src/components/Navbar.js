import { Link } from "react-router-dom";
import CartHeader from "./CartHeader";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 h-16 flex justify-between">
      <Logo />
      <CartHeader />
    </nav>
  );
}

export default Navbar;
