import { useQuery } from 'react-query'
import { api } from '../../api'
import { Status } from '../../../@types/order/status'
import { OrderItem } from '../../../@types/order/get-order/order-item'
import { ApiReturn } from '../../../@types/api'
import { mapStatus } from '../../../@mappings/order/status'
import { User } from '../../../@types/user/user'
import { Address } from '../../../@types/address/address'

interface GetOrderReturn {
    id: string
    status: Status
    orderItems: OrderItem[]
    totalInCents: number
    user: User
    address: Address
}

async function getOrder(id?: string) {
    if (!id) return

    const response = await api.get<ApiReturn<GetOrderReturn>>(`/orders/${id}`)

    return {
        ...response.data,
        data: {
            ...response.data.data,
            statusText: mapStatus[response.data.data.status],
        },
    }
}

export function useOrder(id?: string) {
    return useQuery(['order', id], () => getOrder(id))
}
