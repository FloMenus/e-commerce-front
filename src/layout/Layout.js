import { useEffect, useState } from "react"

import { getProduct } from "../api/Product"

import H1 from "../components/H1"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"

const Layout = ({ children, title }) => {
  // states
  const [countCart, setCountCart] = useState(0)
  const [cart, setCart] = useState([])
  const [cartIds, setCartIds] = useState([])

  // didMount, didUpdate
  useEffect(() => {
    fetchCartProducts()
  }, [])

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
    if (localStorage.cartIds === undefined) {
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
      <Header countCart={countCart} />
      <MainContainer cart={cart} handleClick={handleCartClick}>
        <H1 title={title} />
        {children}
      </MainContainer>
    </>
  )
}

export default Layout
