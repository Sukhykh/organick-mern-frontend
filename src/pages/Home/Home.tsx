import { Hero } from '../../components/Hero/Hero.tsx';
import { OfferBanner } from '../../components/OfferBanner/OfferBanner.tsx';
import { AboutSection } from '../../components/AboutSection/AboutSection.tsx';
import { ShopSection } from '../../components/ShopSection/ShopSection.tsx';
import { Testimonial } from '../../components/Testimonial/Testimonial.tsx';
import { Offer } from '../../components/Offer/Offer.tsx';
import { WhoWeAre } from '../../components/WhoWeAre/WhoWeAre.tsx';
import { Gallery } from '../../components/Gallery/Gallery.tsx';
import { NewsSection } from '../../components/NewsSection/NewsSection.tsx';
import { NewsForm } from '../../components/NewsForm/NewsForm.tsx';

export const Home = () => {
	return (
		<>
			<Hero />
			<OfferBanner />
			<AboutSection />
			<ShopSection isSection />
			<Testimonial />
			<Offer />
			<WhoWeAre />
			<Gallery />
			<NewsSection />
			<NewsForm />
		</>
	);
};
