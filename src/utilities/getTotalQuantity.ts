import { CartProduct } from "../types/product.ts"

export const getTotalQuantity = (arr: Array<CartProduct>) => {
    return arr.map(el => el.quantity).reduce((acum, item) => acum += item, 0)
}