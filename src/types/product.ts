export type Product = {
    title: string,
    tag: string,
    rating: number,
    price: number,
    discount: number,
    description: string,
    productDescription: string,
    additionalInfo: string,
    image: string,
    __v: number,
    _id: string
}

export type CartProduct = {
    product: Product,
    quantity: number
}