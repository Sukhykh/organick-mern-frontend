import { ReactNode, createContext, useContext, useState } from "react"

import { useLocalStorage } from "../hooks/useLocalStorage.ts"
import { useProductStore } from "../store/productStore.ts"
import { getTotalPrice } from "../utilities/getTotalPrice.ts"
import { getTotalQuantity } from "../utilities/getTotalQuantity.ts"
import { getTotalDiscount } from "../utilities/getTotalDiscount.ts"

import { CartProduct } from "../types/product.ts"

type CartProviderProps = {
    children: ReactNode
}

interface State {
    isOpenBurger: boolean;
    modalIsOpened: boolean;
    cartItems: Array<CartProduct>
    cartQuantity: number
    cartTotal: number
    cartDiscount: number
}

interface Action {
    clenCart: () => void
    setOpenBurger: () => void;
    setCloseBurger: () => void;
    setOpenModal: () => void;
    setCloseModal: () => void;
    getCartItemQuantity: (id: string) => number;
    setRundomQuantity: (id: string, value: number) => void
	increaseCartItemsQuantity: (id: string) => void;
	decreaseCartItemsQuantity: (id: string) => void;
	removeFromCart: (id: string) => void;
}

const CartContext = createContext({} as State & Action);

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const findProductById = useProductStore(state => state.findProductById)
    const [isOpenBurger, setIsOpenBurger]= useState(false)
    const [cartItems, setCartItems] = useLocalStorage<Array<CartProduct>>("cart-context", []);
    const cartQuantity = getTotalQuantity(cartItems) || 0;
    const cartTotal = getTotalPrice(cartItems) || 0;
    const cartDiscount = getTotalDiscount(cartItems) || 0;
    const [modalIsOpened, setModalIsOpened] = useState(false)

    const setOpenBurger = () => {
        document.body.style.overflow = 'hidden'
        setIsOpenBurger(true)
    }

    const setCloseBurger = () => {
        document.body.style.overflow = ''
        setIsOpenBurger(false)
    }

    const setOpenModal = () => {
        setModalIsOpened(true)
    }

    const setCloseModal = () => {
        setModalIsOpened(false)
    }

    const getCartItemQuantity = (id: string) => {
        const targetProduct = cartItems.find(el => el.product._id === id)
        return targetProduct ? targetProduct.quantity : 0
    }

    const setRundomQuantity = (id: string, value: number) => {
        if (value === 0 ) {
            removeFromCart(id)
        } else {
            setCartItems(currentItems => {
                const targetProduct = findProductById(id)
                if (!targetProduct) return currentItems;
                if (!currentItems.find(item => item.product._id.toString() === id.toString())) {
                    return [...currentItems, { product: targetProduct, quantity: value }];
                } else {
                    return currentItems.map(item => {
                        if (item.product._id.toString() === id.toString()) {
                            return { ...item, quantity: value };
                        } else {
                            return item;
                        }
                    });
                }
            });
        }
    }

    const increaseCartItemsQuantity = (id: string) => {
        setCartItems(currentItems => {
            const targetProduct = findProductById(id)
            if (!targetProduct) return currentItems;
            if (!currentItems.find(item => item.product._id.toString() === id.toString())) {
                return [...currentItems, { product: targetProduct, quantity: 1 }];
            } else {
                return currentItems.map(item => {
                    if (item.product._id.toString() === id.toString()) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    const decreaseCartItemsQuantity = (id: string) => {
        setCartItems(currentItems => {
            const targetProduct = findProductById(id)
            if (!targetProduct) return currentItems;
            if (currentItems.find(item => item.product._id.toString() === id.toString())?.quantity === 1) {
                return currentItems.filter(item => item.product._id.toString() !== id.toString());
            } else {
                return currentItems.map(item => {
                    if (item.product._id.toString() === id.toString()) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    const removeFromCart = (id: string) => {
		setCartItems(currentItems => {
			return currentItems.filter(item => item.product._id.toString() !== id.toString());
		});
	};

    const clenCart = () => {
        cartItems.forEach(el => removeFromCart(el.product._id))
    }

    return (
		<CartContext.Provider
			value={{
                isOpenBurger,
				cartItems,
				cartQuantity,
                cartTotal,
                cartDiscount,
                modalIsOpened,
                setOpenBurger,
                setCloseBurger,
                setOpenModal,
                setCloseModal,
                setRundomQuantity,
                getCartItemQuantity,
				increaseCartItemsQuantity,
				decreaseCartItemsQuantity,
				removeFromCart,
                clenCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
}