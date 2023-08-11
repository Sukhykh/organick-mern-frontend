import { getDiscountPrice } from "./getDiscountPrice.ts"
import { CartProduct } from "../types/product.ts"

export const getTotalPrice = (arr: Array<CartProduct>) => {
    return arr.map(el => {
        const { price, discount } = el.product
        return getDiscountPrice(discount, price) * el.quantity
    }).reduce((acum, item) => acum += item, 0)
}