import { useProductStore } from "../../store/productStore.ts"


import { Hero } from "../../components/Hero/Hero.tsx"
import { OfferBanner } from "../../components/OfferBanner/OfferBanner.tsx"
import { AboutSection } from "../../components/AboutSection/AboutSection.tsx"
import { ShopSection } from "../../components/ShopSection/ShopSection.tsx"
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
    <Hero/>
    <OfferBanner/>
    <AboutSection/>
    <ShopSection/>



{/*     
 <h1>HOME PAGE</h1>
      <button onClick={setProducts}>fetch</button>
      <button onClick={consoling}>console</button>

      <div>
        {products && products.map(el => {
          return (
            <ProductCard key={el._id} product={el}/>
          )
        })}
      </div> */}

   </>
  )

}
