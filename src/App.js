import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Order from "./pages/Order"

const App = () => {
  // states
  const [countCart, setCountCart] = useState(0)
  // const [cart, setCart] = useState([])
  const [cartIds, setCartIds] = useState([])

  // didMount, didUpdate
  // useEffect(() => {
  //   if (localStorage.cartIds) {
  //   }
  // }, [])

  useEffect(() => {
    setCountCart(cartIds.length)
  }, [cartIds])

  // methodes
  // const fetchCartProducts = async () => {
  //   const strigifiedCartIds = localStorage.getItem("cartIds")
  //   const cartIds = JSON.parse(strigifiedCartIds)
  //   const promises = cartIds.map((id) => {
  //     return getProduct(id)
  //   })
  //   const promisesAllResult = await Promise.all(promises)
  //   setCart(promisesAllResult)
  // }

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
      cartIds.push(id)
      const stringifiedCartIds = JSON.stringify(cartIds)
      localStorage.setItem("cartIds", stringifiedCartIds)
      setCartIds(cartIds)
      // test si id n'est pas dans le LS
      // const index = cartIds.indexOf(id)
      // if (index === -1) {
      //   cartIds.push(id)
      //   const stringifiedCartIds = JSON.stringify(cartIds)
      //   localStorage.setItem("cartIds", stringifiedCartIds)
      //   setCartIds(cartIds)
      // } else {
      //   cartIds.splice(index, 1)
      //   const strigifiedSplicedCartIds = JSON.stringify(cartIds)
      //   localStorage.setItem("cartIds", strigifiedSplicedCartIds)
      //   setCartIds(cartIds)
      // fetchCartProducts()
    }
    // const handleDeleteClick = (id) => {
    //   const localStorageCartIds = localStorage.getItem("cartIds")
    //   const cartIds = JSON.parse(localStorageCartIds)
    //   const index = cartIds.indexOf(id)
    //   if (index === -1) {
    //     cartIds.splice(index, 1)
    //     const strigifiedSplicedCartIds = JSON.stringify(cartIds)
    //     localStorage.setItem("cartIds", strigifiedSplicedCartIds)
    //     setCartIds(cartIds)
    //   }
    // }
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
            <Route
              path="/cart"
              element={
                <Cart
                  cartIds={cartIds}
                  countCart={countCart}
                  // handleDeleteClick={handleDeleteClick}
                />
              }
            />
            <Route
              path="/order/:id"
              element={
                <Order countCart={countCart} handleClick={handleCartClick} />
              }
            />
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
}
export default App
