import CartHeader from "./CartHeader"
import Logo from "./Logo"

function Navbar({ countCart }) {
  return (
    <nav className="px-2 sm:px-4 py-2.5 rounded bg-gray-900 h-16 flex justify-between">
      <Logo />
      <CartHeader countCart={countCart} />
    </nav>
  )
}

export default Navbar
