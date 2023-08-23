import { SmallBanner } from '../../components/SmallBanner/SmallBanner.tsx';
import { CartMenu } from '../../components/CartMenu/CartMenu.tsx';
import { OrderForm } from '../../components/OrderForm/OrderForm.tsx';
import bannerPng from '../../assets/images/Banners/Cart/cart-banner.png';
import bannerWebp from '../../assets/images/Banners/Cart/cart-banner.webp';
import patternPng from '../../assets/images/Banners/Cart/cart-pattern.png';
import patternWebp from '../../assets/images/Banners/Cart/cart-pattern.webp';

const data = {
	bannerPng: bannerPng,
	bannerWebp: bannerWebp,
	patternPng: patternPng,
	patternWebp: patternWebp,
	title: 'cart',
};

export const Cart = () => {
	return (
		<>
			<SmallBanner data={data} />
			<CartMenu />
			<OrderForm />
		</>
	);
};
