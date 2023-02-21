import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { ApiReturn } from '../../@types/api'

export interface ListProductsReturn {
    id: string
    name: string
    priceInCents: number
    status: string
    description: string
    flavor: string
    quantity: number
    imageUrl: string
    createdAt: Date
    updatedAt: Date
}

async function listProducts() {
    const response = await api.get<ApiReturn<ListProductsReturn[]>>('/products')

    return response.data
}

export function useListProducts() {
    return useQuery(['products'], listProducts)
}
