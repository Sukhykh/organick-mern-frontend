import create from 'zustand'
import { persist } from 'zustand/middleware'

import { useProductStore } from "./productStore.ts"
import { Product, CartProduct } from '../types/product.ts'

import { getTotalPrice } from '../utilities/getTotalPrice.ts'
import { getTotalQuantity } from '../utilities/getTotalQuantity.ts'

type State = {
    cartItems: Array<CartProduct>
    cartQuantity: number
    total: number
}

type Action = {
    getProductsFromProductStore: () => Array<Product>
    increaseCartItemsQuantity: (id: Product['_id']) => void
    decreaseCartItemsQuantity: (id: Product['_id']) => void
    removeFromCart: (id: Product['_id']) => void
    getCartTotal: (arr: State['cartItems']) => number
    getCartQuantity: (arr: State['cartItems']) => number
    cleanCart: () => void
}

export const useCartStore = create<State & Action>()(
    persist(
        (set, get) => ({
            cartItems: [],
            cartQuantity: 0,
            total: 0,

            getProductsFromProductStore: () => {
                const { products } = useProductStore.getState();
                return products;
            },

            increaseCartItemsQuantity: id => {
                const prodArr = get().cartItems
                if (prodArr.length) {
                    const curentProduct = prodArr.find(el => el.product._id.toString() === id.toString())
                        if (curentProduct) {
                            prodArr.map(el => el.product._id.toString() === id.toString() ? { product: el.product, quantity: el.quantity += 1 } : el)
                            const quantity = get().getCartQuantity(prodArr)
                            const total = get().getCartTotal(prodArr)
                            if (quantity && total) {
                                set({ cartItems: prodArr, cartQuantity: quantity, total: total })
                            }
                        } else {
                            const allProducts = get().getProductsFromProductStore()
                            const curentProduct = allProducts.find(el => el._id.toString() === id.toString())
                            if (curentProduct) prodArr.push({ product: curentProduct, quantity: 1 })
                            const quantity = get().getCartQuantity(prodArr)
                            const total = get().getCartTotal(prodArr)
                            if (quantity && total) {
                                set({ cartItems: prodArr, cartQuantity: quantity, total: total })
                            }
                        }
                } else {
                    const allProducts = [...useProductStore(state => state.products)]
                    const curentProduct = allProducts.find(el => el._id.toString() === id.toString())
                    if (curentProduct) prodArr.push({ product: curentProduct, quantity: 1 })
                    const quantity = get().getCartQuantity(prodArr)
                    const total = get().getCartTotal(prodArr)
                    if (quantity && total) {
                        set({ cartItems: prodArr, cartQuantity: quantity, total: total })
                    }
                }
            },

            decreaseCartItemsQuantity: id => {
                const prodArr = get().cartItems
                if (prodArr.length) {
                    const curentProduct = prodArr.find(el => el.product._id.toString() === id.toString())
                    if (curentProduct && curentProduct.quantity !== 1) {
                        prodArr.map(el => el.product._id.toString() === id.toString() ? { product: el.product, quantity: el.quantity -= 1 } : el)
                        const quantity = get().getCartQuantity(prodArr)
                        const total = get().getCartTotal(prodArr)
                        if (quantity && total) {
                            set({ cartItems: prodArr, cartQuantity: quantity, total: total })
                        }
                    } else {
                        get().removeFromCart(id)
                    }
                }
            },

            getCartQuantity: arr => arr.length ? getTotalQuantity(arr) : 0,

            getCartTotal: arr => arr.length ? getTotalPrice(arr) : 0,

            removeFromCart: id => {
                const prodArr = get().cartItems
                if (prodArr) {
                    const curentProduct = prodArr.find(el => el.product._id.toString() === id.toString())
                    if (curentProduct) {
                        const finalArr = prodArr.filter(el => el.product._id.toString() !== id.toString())
                        if (finalArr) {
                            const quantity = get().getCartQuantity(finalArr)
                            const total = get().getCartTotal(finalArr)
                            if (quantity && total) {
                                set({ cartItems: finalArr, cartQuantity: quantity, total: total })
                            }
                        }
                    }
                }
            },

            cleanCart: () => set({ cartItems: [], cartQuantity: 0, total: 0 })
        }),
        {
            name: 'cart',
            getStorage: () => localStorage,
        }
    )
)