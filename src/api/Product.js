// Product > /products/:id

const getProduct = async (id) => {
  const request = await fetch(
    `${process.env.REACT_APP_ADDRESS}/products/${id}`
  );
  const response = await request.json();
  return response;
};

const getProductsByCategory = async (category) => {
  const request = await fetch(
    `${process.env.REACT_APP_ADDRESS}/categories/${category}/products`
  );
  const response = await request.json();
  return response;
};

export { getProduct, getProductsByCategory };
