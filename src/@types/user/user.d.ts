import { Gender } from './gender'

export interface User {
    id: string
    name: string
    gender: Gender
    phoneNumber: string
    documentNumber: string
    rewardPoints: number
    email: string
    createdAt: Date
    updatedAt: Date
}
