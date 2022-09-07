// Order > /orders/:id

const getOrder = async (id) => {
  const request = await fetch(`${process.env.REACT_APP_ADDRESS}/orders/${id}`)
  const response = await request.json()
  return response
}
