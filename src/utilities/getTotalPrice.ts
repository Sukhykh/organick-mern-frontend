import { CartProduct } from "../types/product.ts"

export const getTotalPrice = (arr: Array<CartProduct>) => {
    return arr.map(el => {
        const { price, discount } = el.product
        return discount === 0 ? price * el.quantity : discount * el.quantity
    }).reduce((acum, item) => acum += item, 0)
}