import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import CartHeader from "./CartHeader"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="h-16 bg-[#ccc] rounded-b-[10px] px-10 bg-gray-900 sticky top-0 z-10">
      <Navbar />
    </header>
  )
}

export default Header