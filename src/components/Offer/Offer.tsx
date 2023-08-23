import { useCart } from '../../context/CartContext.tsx';
import { useProductStore } from '../../store/productStore.ts';
import { Product } from '../../types/product.ts';
import { ProductCard } from '../ProductCard/ProductCard';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { Subtitle } from '../Subtitle/Subtitle.tsx';
import styles from './Offer.module.scss';

export const Offer = () => {
	const { setOpenModal } = useCart();
	const setCurentProduct = useProductStore((state) => state.setCurentProduct);
	const products = useProductStore((state) => state.products);
	const curentCards = products
		.filter((el) => el.tag === 'Vegetable')
		.slice(0, 4);

	const openModal = (el: Product) => {
		setCurentProduct(el._id);
		setOpenModal();
		const modal = document.getElementById('modalInner');
		if (modal) {
			modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<section className={styles.offer}>
			<div className={styles.offer__container}>
				<div className={styles.offer__wrapper}>
					<Subtitle title='offer' green />
					<div className={styles.offer__titleWrapper}>
						<SectionTitle
							title='we offer organic for you'
							black={false}
							hero={false}
						/>
					</div>
					<div className={styles.offer__cadrWrapper}>
						{curentCards &&
							curentCards.map((el) => (
								<ProductCard
									product={el}
									onClick={openModal}
									key={el._id}
								/>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};
