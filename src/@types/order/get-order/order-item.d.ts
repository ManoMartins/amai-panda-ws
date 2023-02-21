export interface OrderItem {
    id: string
    productId: string
    orderId: string
    quantity: number
    totalInCents: number
    product: Product
    createdAt: Date
    updatedAt: Date
}

export interface Product {
    id: string
    name: string
    priceInCents: number
    status: string
    description: string
    flavor: string
    quantity: number
    imageUrl: string
    createdAt: Date
    updatedAt: Date
}
