export const getDiscountPrice = (discount: number, price: number) => {
    return Number((discount === 0 ? price : price / 100 * (100 - discount)).toFixed(2))
}