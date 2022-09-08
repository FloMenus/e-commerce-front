import { useParams } from "react-router-dom";
import { getProduct } from "../api/Product";
import { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import H1 from "../components/H1";
import Button from "../components/Button";

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
  // console.log(id)
  console.log(product);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <Layout title="">
      <section>
        <div class="relative px-4 py-8 mx-auto max-w-screen-xl bg-">
          <div class="items-start grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Mobile Phone Stand"
                class="object-cover rounded-xl"
                src={product.image}
              />
            </div>

            <div class="sticky top-0">
              <div class="flex justify-between mt-8">
                <div class="max-w-[35ch]">
                  <H1 title={product.name} />
                  <p class="mt-0.5 text-sm">Vendor: {product.vendor}</p>
                </div>

                <p class="text-lg font-bold">{product.price / 100} €</p>
              </div>

              <details class="relative mt-4 group">
                <summary class="block">
                  <div>
                    <div class="prose max-w-none group-open:hidden">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </summary>
              </details>

              <form class="mt-8">
                <div class="flex mt-8">
                <Button name="add" type="button" text="Add to Cart" handleClick={""} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
