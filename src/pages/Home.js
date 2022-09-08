import { useState, useEffect } from "react"
import { getProducts, getCategories } from "../api/Home"
import { getProductsByCategory } from "../api/Product"

import Card from "../components/Card"
import Layout from "../layout/Layout"
import Grid from "../components/Grid"
import Select from "../components/Select"

const Home = ({ handleClick }) => {
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

  const handleChangeFilter = (e) => {
    const category = e.target.value
    if (category === "all") {
      fetchData()
    } else {
      getProductsByCategory(category)
    }
  }
  return (
    <Layout title="HomePage">
      <Select /*handleChange={}*/ value="all" options={categories} />
      <Grid>
        {products.map((product) => (
          <Card handleClick={handleClick} product={product} />
        ))}
      </Grid>
    </Layout>
  )
}

export default Home
