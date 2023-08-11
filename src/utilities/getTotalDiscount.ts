import { getDiscountPrice } from "./getDiscountPrice.ts"
import { CartProduct } from "../types/product.ts"

export const getTotalDiscount = (arr: Array<CartProduct>) => {
    return arr.map(el => {
        const { price, discount } = el.product
        return discount === 0 ? 0 : getDiscountPrice(0, price) * el.quantity - getDiscountPrice(discount, price) * el.quantity
    }).reduce((acum, item) => acum += item, 0)
}