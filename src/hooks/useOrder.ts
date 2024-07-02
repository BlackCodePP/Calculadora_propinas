import { useState } from "react"
import { TOrdetItem, TMenuItem } from "../types"

export default function useOrder () {
    const [order,setOrder] = useState<TOrdetItem[]>([])
    const [tip,setTip] = useState(0)

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

    const removeItem = (id: TMenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }
    
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem
    }
}