import { useState } from "react"
import { TOrdetItem, TMenuItem } from "../types"

export default function useOrder () {
    const [order,setOrder] = useState<TOrdetItem[]>([])

    const addItem = (item: TMenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            const updatedOrder = order.map (orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity:orderItem.quantity + 1} : orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem : TOrdetItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    console.log (order)
    
    return {
        addItem
    }
}