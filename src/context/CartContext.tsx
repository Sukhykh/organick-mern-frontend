import { ReactNode, createContext, useContext } from "react"

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
    cartItems: Array<CartProduct>
    cartQuantity: number
    cartTotal: number
    cartDiscount: number
}

interface Action {
	// getItemQuantity: (id: string) => number;
	increaseCartItemsQuantity: (id: string) => void;
	decreaseCartItemsQuantity: (id: string) => void;
	removeFromCart: (id: string) => void;
}

const CartContext = createContext({} as State & Action);

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const { findProductById } = useProductStore(state => ({ findProductById: state.findProductById }))

    const [cartItems, setCartItems] = useLocalStorage<Array<CartProduct>>("cart-context", []);
    const cartQuantity = getTotalQuantity(cartItems) || 0;
    const cartTotal = getTotalPrice(cartItems) || 0;
    const cartDiscount = getTotalDiscount(cartItems) || 0;

    // const getItemQuantity = (id: string) => {
	// 	return cartItems.find(item => item.product._id.toString() === id.toString())?.quantity || 0;
	// };

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

    return (
		<CartContext.Provider
			value={{
				cartItems,
				cartQuantity,
                cartTotal,
                cartDiscount,
				// getItemQuantity,
				increaseCartItemsQuantity,
				decreaseCartItemsQuantity,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}