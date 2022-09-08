import Navbar from "./Navbar"

const Header = ({ countCart }) => {
  return (
    <header className="h-16 rounded-b-[10px] px-10 bg-gray-900 sticky top-0 z-10">
      <Navbar countCart={countCart} />
    </header>
  )
}

export default Header
