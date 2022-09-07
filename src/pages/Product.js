import { useParams } from "react-router-dom";
import { getProduct } from "../api/Product";
import { useEffect, useState } from "react";

const Product = () => {
  const { id } = useParams();
  // state
  const [product, setProduct] = useState(null);

  // didMount, didUpdate
  useEffect(() => {
    fetchData();
  }, []);

  //methodes

  const fetchData = async () => {
    const productData = await getProduct(id);
    setProduct(productData);
  };

  return <div>Product</div>;
};

export default Product;
