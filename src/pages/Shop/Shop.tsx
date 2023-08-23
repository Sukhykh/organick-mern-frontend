import { SmallBanner } from '../../components/SmallBanner/SmallBanner.tsx';
import { NewsForm } from '../../components/NewsForm/NewsForm';
import { ShopSection } from '../../components/ShopSection/ShopSection.tsx';
import bannerPng from '../../assets/images/Banners/Shop/shop-banner.png';
import bannerWebp from '../../assets/images/Banners/Shop/shop-banner.webp';
import patternPng from '../../assets/images/Banners/Shop/shop-pattern.png';
import patternWebp from '../../assets/images/Banners/Shop/shop-pattern.webp';

const data = {
	bannerPng: bannerPng,
	bannerWebp: bannerWebp,
	patternPng: patternPng,
	patternWebp: patternWebp,
	title: 'shop',
};

export const Shop = () => {
	return (
		<>
			<SmallBanner data={data} />
			<ShopSection isSection={false} />
			<NewsForm />
		</>
	);
};
