import { useState, useEffect } from "react"
import { getProducts, getCategories } from "../api/Home"

import Card from "../components/Card"
import Layout from "../layout/Layout"
import Grid from "../components/Grid"
import Filter from "../components/Filter"

const Home = () => {
  // state
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  // didMount, didUpdate
  useEffect(() => {
    fetchData()
  }, [])

  //methodes

  const fetchData = async () => {
    const productsData = await getProducts()
    setProducts(productsData)
    const categoriesData = await getCategories()
    setCategories(categoriesData)
  }

  return (
    <Layout title="HomePage">
      <Filter />
      <Grid>
        {products.map((product) => {
          return <Card product={product} />
        })}
      </Grid>
    </Layout>
  )
}

export default Home
