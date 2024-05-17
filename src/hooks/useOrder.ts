import { useState } from "react"
import { MenuItem, OrderItem } from '../types';

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)


    const removeItem = (id: MenuItem['id']) => {
        setOrder(orderItem => orderItem.filter(item => item.id !== id));

    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        removeItem,
        tip,
        setTip,
        placeOrder
    }
}