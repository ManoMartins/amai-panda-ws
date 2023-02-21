export interface ApiReturn<T> {
    data: T
    success: boolean
    error: any
    errorMessage: string
}
