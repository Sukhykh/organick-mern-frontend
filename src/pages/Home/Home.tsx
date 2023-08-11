
import { useProductStore } from "../../store/productStore.ts"


import { ProductCard } from '../../components/ProductCard.tsx'




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
