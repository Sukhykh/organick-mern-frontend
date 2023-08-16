import { useState } from "react"
import { axiosBasic } from "../../../axiosConfig.ts"
import { Order } from "../../types/order.ts"

export const Orders = () => {
   const [orders, setOrders] = useState<Array<Order>>([])
   
   const getAllOrders = async () => {
    try {
        const ordersArr = await axiosBasic.get('/orders')
        setOrders(ordersArr.data)
    } catch (error) {
        
    }
   }
   const consoling = () => {
    console.log(orders)
   }

    return (
        <>
                <h1>ORDERS PAGE</h1>

<button onClick={getAllOrders}>fetch</button>
<button onClick={consoling}>console</button>
<div>
    {orders && orders.map(el => {
        return (
            <>
            <h2>user: {el?.user?.fullName}</h2>
            <h3>order</h3>
            <div>
                {el?.products?.map(item => {
                    return (
                        <>
                            <span>{item.productId.title}</span>
                            <span>{item.quantity}</span>
                        </>
                    )
                })}
            </div>
            </>
 
        )
    })}
</div>
        </>

    )
}