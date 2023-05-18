import { useMutation } from 'react-query'
import { api } from '../../api'
import { queryClient } from '../../query-client'

interface InputDenyExchangeRequestOrder {
    id: string
}

async function denyExchangeRequestOrder(input: InputDenyExchangeRequestOrder) {
    const { id } = input

    await api.patch(`/orders/${id}/deny-request-exchange`)
}

export function useDenyExchangeRequestOrder() {
    return useMutation(denyExchangeRequestOrder, {
        async onSuccess() {
            await queryClient.invalidateQueries(['order'])
        },
    })
}
