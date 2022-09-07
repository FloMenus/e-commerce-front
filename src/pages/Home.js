import { useState, useEffect } from "react";
import { getProducts, getCategories } from "../api/Home";

import Card from "../components/Card";
import Layout from "../layout/Layout";
import Grid from "../components/Grid";

const Home = () => {
  // state
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // didMount, didUpdate
  useEffect(() => {
    fetchData();
  }, []);

  //methodes

  const fetchData = async () => {
    const productsData = await getProducts();
    setProducts(productsData);
    const categoriesData = await getCategories();
    setCategories(categoriesData);
  };

  return (
    <Layout title="HomePage">
      <Grid>
        {products.map((product) => (
        <Card name={product.name} image={product.image} price={product.price}/>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
