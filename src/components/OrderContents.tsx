import { OderActions } from "../reducers/orderResucer"
import { OrderItem } from "../types"

type OrderContentsProps = {

  order: OrderItem[]
  dispatch: React.Dispatch<OderActions>
}


export const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl mx-3">Consumo</h2>

      <div className="space-y-3 mt-10 mx-3">
        {order.map(item => (
          <div className="flex justify-between border-t last-of-type:border-b border-teal-300  rounded-lg py-5 mx-auto items-center"
            key={item.id}>
            <div>

              <p className="text-lg">
                {item.name} - $ {item.price}
              </p>
              <p className="font-black flex justify-between">
                Cantidad: {item.quantity} - $ {item.price * item.quantity}
              </p>
            </div>
            <button className="bg-red-600 rounded-full w-8 h-8 text-white font-black"
              onClick={() => dispatch({ type: "removeItem", payload: { id: item.id } })}
            >
              x

            </button>
          </div>
        ))
        }

      </div>
    </div >
  )
}

