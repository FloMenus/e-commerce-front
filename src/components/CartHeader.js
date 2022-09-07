import { Link } from "react-router-dom"

const CartHeader = () => {
  return (
    <Link to="/cart" className="flex justify-center align-center m-auto">
        <img src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-16.jpg" className="h-5 sm:h-6" alt="Cart" />
    </Link>
  )
}

export default CartHeader