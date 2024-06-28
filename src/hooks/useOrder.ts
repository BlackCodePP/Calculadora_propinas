import { useState } from "react"
import { TOrdetItem, TMenuItem } from "../types"

export default function useOrder () {
    const [order,setOrder] = useState<TOrdetItem[]>([])

    const addItem = (item: TMenuItem) => {
        const newItem : TOrdetItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }

    console.log (order)
    
    return {
        addItem
    }
}