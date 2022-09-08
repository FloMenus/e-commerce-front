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
  const [selectedCategory, setSelectedCategory] = useState("")
  
  // didMount
  useEffect(() => {
    fetchData()
  }, [])
  useEffect( () => {

  },[selectedCategory])
  
  //methodes

  const fetchData = async () => {
    const productsData = await getProducts()
    setProducts(productsData)
    const categoriesData = await getCategories()
    setCategories(categoriesData)
  }

  const handleChangeFilter = async e => {
    const category = e.target.value
    setSelectedCategory(category)
    if (category === "") {
      fetchData()
    } else {
      fetchProductsByCategory(category)
    }
  }

  const fetchProductsByCategory = async (category) => {
    const productsData = await getProductsByCategory(category)
      setProducts(productsData)
  }

  return (
    <Layout title="HomePage">
      <h3>Trier</h3>
      <Select handleChange={handleChangeFilter} value={selectedCategory} options={categories}  />
      <Grid>
        {products.map((product) => (
          <Card handleClick={handleClick} product={product} />
        ))}
      </Grid>
    </Layout>
  )
}

export default Home
