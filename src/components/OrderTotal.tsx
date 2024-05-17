import { useMemo } from "react"
import { OrderItem } from "../types"
import { OderActions } from "../reducers/orderResucer"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number,
    dispatch: React.Dispatch<OderActions>

}


export const OrderTotal = ({ order, tip, dispatch }: OrderTotalProps) => {

    const subtotalSuma = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipSuma = useMemo(() => subtotalSuma * tip, [tip, order])

    const totalSuma = useMemo(() => subtotalSuma + tipSuma, [tip, order])

    return (

        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:{" "}
                    <span className="font-bold">${" "}{subtotalSuma}</span>
                </p>
                <p>Propina:{" "}
                    <span className="font-bold">${" "}{tipSuma}</span>
                </p>
                <p>Total a pagar:{" "}
                    <span className="font-bold">${" "}{totalSuma}</span>
                </p>
            </div>

            <button
                className="w-full rounded-lg bg-black p-2  text-white uppercase font-bold mt-10 disabled:opacity-5"
                disabled={totalSuma === 0}
                onClick={() => dispatch({ type: "placeOrder" })}
            >
                Guardar Orden
            </button>
        </>
    )
}
