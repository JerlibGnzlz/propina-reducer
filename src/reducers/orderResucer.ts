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

    return {
      ...state
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


