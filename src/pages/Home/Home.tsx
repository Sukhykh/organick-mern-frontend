import { Hero } from "../../components/Hero/Hero.tsx"
import { OfferBanner } from "../../components/OfferBanner/OfferBanner.tsx"
import { AboutSection } from "../../components/AboutSection/AboutSection.tsx"
import { ShopSection } from "../../components/ShopSection/ShopSection.tsx"

export const Home = () => {
  return (
    <>
      <Hero/>
      <OfferBanner/>
      <AboutSection/>
      <ShopSection/>
    </>
  )

}
