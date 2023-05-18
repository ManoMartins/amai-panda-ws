import { useMutation } from 'react-query'
import { api } from '../../api'
import { queryClient } from '../../query-client'

interface InputExchangeReceivedOrder {
    id: string
}

async function exchangeReceivedOrder(input: InputExchangeReceivedOrder) {
    const { id } = input

    await api.patch(`/orders/${id}/exchange-received`)
}

export function useExchangeReceivedOrder() {
    return useMutation(exchangeReceivedOrder, {
        async onSuccess() {
            await queryClient.invalidateQueries(['order'])
        },
    })
}
