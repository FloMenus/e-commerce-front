import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import { getProduct } from "./api/Product"

import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Order from "./pages/Order"

const App = () => {
  // states
  const [countCart, setCountCart] = useState(0)
  const [cart, setCart] = useState([])
  const [cartIds, setCartIds] = useState([])

  // didMount, didUpdate
  useEffect(() => {}, [])

  // methodes
  const fetchCartProducts = async () => {
    const strigifiedCartIds = localStorage.getItem("cartIds")
    const cartIds = JSON.parse(strigifiedCartIds)
    const promises = cartIds.map((id) => {
      return getProduct(id)
    })
    const promisesAllResult = await Promise.all(promises)
    setCart(promisesAllResult)
    setCountCart(promisesAllResult.length)
  }
  const handleCartClick = (id) => {
    if (!localStorage.cartIds) {
      const cartIds = []
      cartIds.push(id)
      const stringifiedCartIds = JSON.stringify(cartIds)
      localStorage.setItem("cartIds", stringifiedCartIds)
      setCartIds(cartIds)
    } else {
      const localStorageCartIds = localStorage.getItem("cartIds")
      const cartIds = JSON.parse(localStorageCartIds)
      // test si id n'est pas dans le LS
      const index = cartIds.indexOf(id)
      if (index === -1) {
        cartIds.push(id)
        const stringifiedCartIds = JSON.stringify(cartIds)
        localStorage.setItem("cartIds", stringifiedCartIds)
        setCartIds(cartIds)
      } else {
        cartIds.splice(index, 1)
        const strigifiedSplicedCartIds = JSON.stringify(cartIds)
        localStorage.setItem("cartIds", strigifiedSplicedCartIds)
        setCartIds(cartIds)
        fetchCartProducts()
      }
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home handleClick={handleCartClick} countCart={countCart} />
            }
          />
          <Route path="/cart" element={<Cart countCart={countCart} />} />
          <Route path="/order/:id" element={<Order countCart={countCart} />} />
          <Route
            path="/:id"
            element={
              <Product handleClick={handleCartClick} countCart={countCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
