import { useMutation } from 'react-query'
import { api } from '../../api'

import { Status } from '../../../@types/order/status'

interface InputUpdateStatus {
    id: string
    status: Status
}

async function updateStatus(input: InputUpdateStatus) {
    await api.patch(`/orders/${input.id}/status`, { status: input.status })
}

export function useUpdateStatus() {
    return useMutation(updateStatus)
}
