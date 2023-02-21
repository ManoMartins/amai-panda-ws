import { useMutation } from 'react-query'
import { api } from '../../api'

interface InputAcceptExchangeRequestOrder {
    id: string
    voucherCode: string
}

async function acceptExchangeRequestOrder(
    input: InputAcceptExchangeRequestOrder
) {
    const { id, voucherCode } = input

    await api.patch(`/orders/${id}/accept-exchange-request`, {
        voucherCode,
    })
}

export function useAcceptExchangeRequestOrder() {
    return useMutation(acceptExchangeRequestOrder)
}
