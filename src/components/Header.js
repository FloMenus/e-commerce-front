import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import CartHeader from "./CartHeader"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className=" h-16 flex items-center justify-around bg-[#ccc] rounded-b-[10px] px-10 dark:bg-gray-900">
      <Navbar />
    </header>
  )
}

export default Header