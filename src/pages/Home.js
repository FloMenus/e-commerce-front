<<<<<<< HEAD
import { useState, useEffect } from "react";
import { getProducts, getCategories } from "../api/Home";
import { Link } from "react-router-dom";
=======
import { useState, useEffect } from "react"
import { getProducts, getCategories } from "../api/Home"
>>>>>>> 858794f80659d1ac8d57591b29ab7d45d69ee073

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
<<<<<<< HEAD
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <Card
              name={product.name}
              image={product.image}
              price={product.price}
            />
          </Link>
        ))}
=======
        {products.map((product) => {
          return <Card product={product} />
        })}
>>>>>>> 858794f80659d1ac8d57591b29ab7d45d69ee073
      </Grid>
    </Layout>
  )
}

export default Home
