import { useMutation } from 'react-query'
import { api } from '../../api'

interface InputDenyExchangeRequestOrder {
    id: string
    voucherCode: string
}

async function denyExchangeRequestOrder(input: InputDenyExchangeRequestOrder) {
    const { id, voucherCode } = input

    await api.patch(`/orders/${id}/deny-exchange-request`, {
        voucherCode,
    })
}

export function useDenyExchangeRequestOrder() {
    return useMutation(denyExchangeRequestOrder)
}
