import { MenuItem, OrderItem } from "../types";


export type OderActions =
  { type: "addItem", payload: { item: MenuItem } } |
  { type: "removeItem", payload: { id: MenuItem["id"] } } |
  { type: "placeOrder" } |
  { type: "addTip", payload: { value: number } }


export type OrderState = {
  order: OrderItem[]
  tip: number
}

export const initialState: OrderState = {
  order: [],
  tip: 0
}

export const orderReducer = (
  state: OrderState = initialState,
  action: OderActions
) => {
  if (action.type === "addItem") {

    const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id);

    let order: OrderItem[] = []
    if (itemExist) {
      order = state.order.map(orderItem => orderItem.id === action.payload.item.id
        ? { ...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
      )
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
      order = [...state.order, newItem]
    }
    return {
      ...state,
      order
    }
  }

  if (action.type === "removeItem") {

    return {
      ...state
    }
  }

  if (action.type === "placeOrder") {

    return {
      ...state
    }
  }

  if (action.type === "addTip") {

    return {
      ...state
    }
  }
  return state
}


