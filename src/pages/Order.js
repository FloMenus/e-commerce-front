import { useParams } from "react-router-dom"
import { getOrder } from "../api/Order"
import { useEffect, useState } from "react"

const Order = () => {
  const { id } = useParams()
  // state
  const [order, setOrder] = useState(null)

  // didMount, didUpdate
  useEffect(() => {
    fetchData()
  }, [])

  //methodes

  const fetchData = async () => {
    const orderData = await getOrder(id)
    setOrder(orderData)
  }
  return <div>Order</div>
}

export default Order
