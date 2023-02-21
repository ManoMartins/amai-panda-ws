import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { ApiReturn } from '../../@types/api'
import { mapStatus } from '../../@mappings/order/status'

export interface ListOrdersReturn {
    id: string
    orderItems: OrderItem[] | null
    totalInCents: number
    status: OrderStatus
    createdAt: Date
    updatedAt: Date
}

export interface OrderItem {
    id: string
    productId: string
    orderId: string
    quantity: number
    totalInCents: number
    product: Product
    createdAt: Date
    updatedAt: Date
}

export interface Product {
    id: string
    name: string
    priceInCents: number
    status: ProductStatus
    description: string
    flavor: string
    quantity: number
    imageUrl: string
    createdAt: Date
    updatedAt: Date
}

export enum ProductStatus {
    Enabled = 'ENABLED',
}

export enum OrderStatus {
    WaitingPayment = 'WAITING_PAYMENT',
}

async function getOrders() {
    const response = await api.get<ApiReturn<ListOrdersReturn[]>>('/orders')

    return {
        ...response.data,
        data: response.data.data.map((data) => ({
            ...data,
            status: mapStatus[data.status],
        })),
    }
}

export function useOrders() {
    return useQuery(['orders'], getOrders)
}
