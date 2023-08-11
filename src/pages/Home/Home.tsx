import React from 'react'
import { useProductStore } from "../../store/productStore.ts"
import { useCartStore } from "../../store/cartStore.ts"
import { Product } from '../../types/product.ts'

import { ProductCard } from '../../components/ProductCard.tsx'

const baseUrl = import.meta.env.VITE_SERVER


export const Home = () => {
  const { products, setProducts } = useProductStore(state => ({
    products: state.products,
    setProducts: state.setProducts
  }))


  const consoling = () => {
    console.log(products)
  }



  return (
    <>
 <h1>HOME PAGE</h1>
      <button onClick={setProducts}>fetch</button>
      <button onClick={consoling}>console</button>

      <div>
        {products && products.map(el => {
          return (
            <ProductCard key={el._id} product={el}/>
          )
        })}
      </div>

   </>
  )

}
