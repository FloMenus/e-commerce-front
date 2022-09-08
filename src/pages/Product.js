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
  console.log(id)
  // console.log(product);

  return (
    <section>
      <div class="relative px-4 py-8 mx-auto max-w-screen-xl">
        <div class="items-start grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Mobile Phone Stand"
                class="object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
              />
            </div>  

          <div class="sticky top-0">

            <div class="flex justify-between mt-8">
              <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">
                  {product.name}
                </h1>
                <p class="mt-0.5 text-sm">{product.vendor}</p>
              </div>

              <p class="text-lg font-bold">{product.price}</p>
            </div>

            <details class="relative mt-4 group">
              <summary class="block">
                <div>
                  <div class="prose max-w-none group-open:hidden">
                    <p>
                      {product.description}
                    </p>
                  </div>
                </div>
              </summary>
            </details>

            <form class="mt-8">
              <div class="flex mt-8">
                <button
                  type="submit"
                  class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
