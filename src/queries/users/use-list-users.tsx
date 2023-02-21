import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { ApiReturn } from '../../@types/api'

export interface ListUsersReturn {
    id: string
    name: string
    gender: string
    phoneNumber: string
    documentNumber: string
    rewardPoints: number
    email: string
    createdAt: Date
    updatedAt: Date
}

async function listUsers() {
    const response = await api.get<ApiReturn<ListUsersReturn[]>>('/users')

    return response.data
}

export function useListUsers() {
    return useQuery(['users'], listUsers)
}
