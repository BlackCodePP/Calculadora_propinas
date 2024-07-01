import { useMemo } from "react"
import { TOrdetItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: TOrdetItem[]
}

export default function OrderTotals({order}: OrderTotalsProps) {
    const subtotalAmount = useMemo(() => order.reduce((total, item) => 
        total + (item.quantity * item.price), 0), [order]
    )

    return (
        <>
            <div className=" space-y-3">
                <h2 className=" font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className=" font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina {''}
                    <span className=" font-bold">$0</span>
                </p>

                <p>Total a pagar {''}
                    <span className=" font-bold">$0</span>
                </p>
            </div>

            <button>

            </button>
        </>
    )
}
