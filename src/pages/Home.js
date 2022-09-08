import { useState, useEffect } from "react";
import { getProducts, getCategories } from "../api/Home";
import { Link } from "react-router-dom";

import Card from "../components/Card"
import Layout from "../layout/Layout"
import Grid from "../components/Grid"

const Home = () => {
  // state
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  
  // didMount, didUpdate
  useEffect(() => {
    fetchData()
  }, [])

  console.log(products)
  
  //methodes

  const fetchData = async () => {
    const productsData = await getProducts()
    setProducts(productsData)
    const categoriesData = await getCategories()
    setCategories(categoriesData)
  }
  return (
    <Layout title="HomePage">
      <Grid>
        {products.map((product) => (
          <Link to={`/${product.id}`}>
            <Card product={product} />
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}

export default Home
