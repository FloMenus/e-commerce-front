// Product > /products/:id

const getProduct = async (id) => {
  const request = await fetch(
    `${process.env.REACT_APP_ADDRESS}/products/${id}`
  );
  const response = await request.json();
  return response;
};
