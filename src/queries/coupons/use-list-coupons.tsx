import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { ApiReturn } from '../../@types/api'
import { mapStatus } from '../../@mappings/coupon/status'
import { Status } from '../../@types/coupon/status'

interface ListCouponsReturn {
    id: string
    status: Status
    voucherCode: string
    amount: number
    userId: string
    createdAt: Date
    updatedAt: Date
}

async function listCoupons() {
    const response = await api.get<ApiReturn<ListCouponsReturn[]>>('/coupons')

    return {
        ...response.data,
        data: response.data.data.map((data) => ({
            ...data,
            status: mapStatus[data.status],
        })),
    }
}

export function useListCoupons() {
    return useQuery(['coupons'], listCoupons)
}
