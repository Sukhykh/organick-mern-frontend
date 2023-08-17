import { Product } from "./product.ts"

export type Order = {
    products: [{
        productId: Product,
        quantity: number,
        _id: string,
    }]
    user: {
        address: string,
        email: string,
        fullName: string,
        message: string,
        phoneNumber: string,
    },
    _id: number,
    __v: number
}