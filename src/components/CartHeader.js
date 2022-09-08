import { Link } from "react-router-dom"

const CartHeader = ({ countCart }) => {
  return (
    <Link
      to="/cart"
      className="flex justify-center align-center my-auto max-w-max"
    >
      <img
        src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-16.jpg"
        className="h-5 sm:h-6"
        alt="Cart"
      />
      {countCart > 0 && <p className="text-red-600">{countCart}</p>}
    </Link>
  )
}

export default CartHeader
