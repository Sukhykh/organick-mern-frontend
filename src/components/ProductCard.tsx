
import { Product } from '../types/product.ts'

const baseUrl = import.meta.env.VITE_SERVER

import { useCart } from "../context/CartContext.tsx"

interface ProductCardProps {
    product: Product;
  }

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//     const { cartItems, increaseCartItemsQuantity } = useCartStore(state => ({
//         cartItems: state.cartItems,
//         increaseCartItemsQuantity: state.increaseCartItemsQuantity
//       }))
// const [cart, setCart] = useState<Array<Product>>([])

const consoling = () => {
    console.log(cartItems)
    console.log('Quantity - ' + cartQuantity)
    console.log('total - ' + cartTotal)
    console.log('discont - ' + cartDiscount)
}

const {
  cartItems,
  cartQuantity,
  cartTotal,
  cartDiscount,
  increaseCartItemsQuantity,
  decreaseCartItemsQuantity,
  removeFromCart,
 } = useCart()

const adding = () => {
    increaseCartItemsQuantity(product._id)
}
const dropping = () => {
  decreaseCartItemsQuantity(product._id)
}

const remove = () => {
  removeFromCart(product._id)
}
    
    return (
        <div key={product._id}>
        <img src={`${baseUrl}${product.image}`} alt={product.title} />
        <div onClick={adding}>+ cart</div>
        <div onClick={dropping}>- cart</div>
        <div onClick={remove}>remove</div>
        <div onClick={consoling}>get cart</div>
      
      </div>
    )
}