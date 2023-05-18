import { useMutation } from 'react-query'
import { api } from '../../api'
import { queryClient } from '../../query-client'

interface InputAcceptExchangeRequestOrder {
    id: string
}

async function acceptExchangeRequestOrder(
    input: InputAcceptExchangeRequestOrder
) {
    const { id } = input

    await api.patch(`/orders/${id}/accept-request-exchange`)
}

export function useAcceptExchangeRequestOrder() {
    return useMutation(acceptExchangeRequestOrder, {
        async onSuccess() {
            await queryClient.invalidateQueries(['order'])
        },
    })
}
