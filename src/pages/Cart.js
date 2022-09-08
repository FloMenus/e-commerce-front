import CardCart from "../components/CardCart"
import Layout from "../layout/Layout"
import Button2 from "../components/Button2"
import { useEffect, useState } from "react"
import { getProduct } from "../api/Product"

const Cart = ({ countCart, handleDeleteClick }) => {
  //states
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  //didMount
  useEffect(() => {
    fetchCartProducts()
  }, [])

  //methodes
  const fetchCartProducts = async () => {
    const strigifiedCartIds = localStorage.getItem("cartIds")
    const cartIds = JSON.parse(strigifiedCartIds)
    const promises = cartIds.map((id) => {
      return getProduct(id)
    })
    const promisesAllResult = await Promise.all(promises)
    setProducts(promisesAllResult)
    let total = 0
    console.log(promisesAllResult)
    promisesAllResult.forEach((promise) => {
      console.log(promise)
      total = total + promise.price
    })
    setTotalPrice(total)
  }
  return (
    <Layout title="Panier" countCart={countCart}>
      {products.map((product) => {
        return <CardCart product={product} />
      })}
      <p>Prix total : {totalPrice / 100} €</p>
      <Button2 text="Valider la commande" type="text" />
    </Layout>
  )
}

export default Cart
