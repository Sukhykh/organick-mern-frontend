import React from 'react'
import { useProductStore } from "../../store/productStore.ts"
import { useCartStore } from "../../store/cartStore.ts"
import { Product } from '../../types/product.ts'

import { ProductCard } from '../../components/ProductCard.tsx'

const baseUrl = import.meta.env.VITE_SERVER



export const About = () => {



    const { products, setProducts, } = useProductStore(state => ({
        products: state.products,
        setProducts: state.setProducts,
      }))
    const { increaseCartItemsQuantity, decreaseCartItemsQuantity, cartItems } = useCartStore(state => ({
        increaseCartItemsQuantity: state.increaseCartItemsQuantity,
        decreaseCartItemsQuantity: state.decreaseCartItemsQuantity,
        cartItems: state.cartItems
    }))
    
      const consoling = () => {
        console.log(products)
        console.log(cartItems)
      }

      const adding = (id:string) => {

        increaseCartItemsQuantity(id)
        
    }
    const dropping = (id:string) => {
      decreaseCartItemsQuantity(id)
    }
    

    return (
        <>
        <h1>About PAGE</h1>

        <button onClick={setProducts}>fetch</button>
        <button onClick={consoling}>console</button>

            <div>
            {products && products.map(el =>  (
                <div key={el._id}>
                  <div >
                    <img src={`${baseUrl}${el.image}`} alt={el.title} />
                    <div onClick={() => adding(el._id)}>+ cart</div>
                    <div onClick={() => dropping(el._id)}>- cart</div>
                    <div onClick={consoling}>get cart</div>
                    </div>
                  </div>
                )
            )}
            </div>
           
        </>
    )
}