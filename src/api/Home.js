// Home > /products
const getProducts = async () => {
  const request = await fetch(`${process.env.REACT_APP_ADDRESS}/products`)
  const response = await request.json()
  return response
}

// Home > /categories
const getCategories = async () => {
  const request = await fetch(`${process.env.REACT_APP_ADDRESS}/categories`)
  const response = await request.json()
  return response
}

export { getProducts, getCategories }
