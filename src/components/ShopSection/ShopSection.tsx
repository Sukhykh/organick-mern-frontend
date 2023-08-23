import { useEffect } from 'react';
import { useProductStore } from '../../store/productStore.ts';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { ProductCard } from '../ProductCard/ProductCard.tsx';
import { ProductModal } from '../ProductModal/ProductModal.tsx';
import { Product } from '../../types/product.ts';
import { useCart } from '../../context/CartContext.tsx';
import sprite from '../../assets/images/sprite.svg';
import styles from './ShopSection.module.scss';

type ShopSectionProps = {
	isSection: boolean
}

export const ShopSection: React.FC<ShopSectionProps> = ({ isSection }) => {
	const { setOpenModal, setCloseModal, modalIsOpened } = useCart();
	const products = useProductStore(state => state.products)
	const productsToShow = useProductStore((state) => state.productsToShow);
	const slicer = useProductStore((state) => state.slicer);
	const setCurentProduct = useProductStore((state) => state.setCurentProduct);
	const setProductsToShow = useProductStore(
		(state) => state.setProductsToShow
	);
	const setProducts = useProductStore((state) => state.setProducts);
	const setSlicertoNull = useProductStore((state) => state.setSlicertoNull);
	const setSlicertoNumber = useProductStore(
		(state) => state.setSlicertoNumber
	);

	useEffect(() => {
		try {
			setProducts();
		} catch (error) {
			console.error('Error fetching and setting products:', error);
		}
	}, []);

	const loadMore = (e: any) => {
		e.preventDefault();
		setSlicertoNull();
		setProductsToShow();
	};

	const hideAll = (e: any) => {
		e.preventDefault();
		setSlicertoNumber();
		setProductsToShow();
	};

	const openModal = (el: Product) => {
		setCurentProduct(el._id);
		setOpenModal();
		const modal = document.getElementById('modalInner');
		if (modal) {
			modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	const closeModal = () => {
		setCurentProduct('');
		setCloseModal();
	};

	const handleCloser = (e: any) => {
		if (e.target.id === 'modal') return closeModal();
	};

	return (
		<section className={styles.shopSection}>
			<div className={styles.shopSection__container}>
				<div className={styles.shopSection__wrapper}>
					{isSection && <Subtitle title='categories' green={true} />}
					{isSection && <div className={styles.shopSection__titleWrapper}>
						<SectionTitle
							title='our products'
							hero={false}
							black={true}
						/>
					</div>}
					{isSection ? <div className={styles.shopSection__cardsWrapper}>
						{productsToShow?.map((el) => (
							<ProductCard
								product={el}
								key={el._id}
								onClick={openModal}
							/>
						))}
					</div> : 
					<div className={styles.shopSection__cardsWrapper}>
						{products?.map((el) => (
							<ProductCard
								product={el}
								key={el._id}
								onClick={openModal}
							/>
						))}
					</div>}
					{isSection && <div className={styles.shopSection__buttonWrapper}>
						{slicer && (
							<a
								className={styles.shopSection__button}
								href='#'
								onClick={(e) => loadMore(e)}
							>
								<span
									className={styles.shopSection__buttonText}
								>
									load more
								</span>
								<span
									className={styles.shopSection__buttonItem}
								>
									<svg
										className={
											styles.shopSection__buttonSvg
										}
									>
										<use
											className={
												styles.shopSection__buttonIcon
											}
											xlinkHref={`${sprite}#buttonArrow`}
										/>
									</svg>
								</span>
							</a>
						)}
						{!slicer && (
							<a
								className={styles.shopSection__button}
								href='#'
								onClick={(e) => hideAll(e)}
							>
								<span
									className={styles.shopSection__buttonText}
								>
									hide all
								</span>
								<span
									className={styles.shopSection__buttonItem}
								>
									<svg
										className={
											styles.shopSection__buttonSvg
										}
									>
										<use
											className={
												styles.shopSection__buttonIcon
											}
											xlinkHref={`${sprite}#buttonArrow`}
										/>
									</svg>
								</span>
							</a>
						)}
					</div>}
				</div>
			</div>
			<div
				className={
					modalIsOpened
						? styles.shopSection__modal
						: `${styles.shopSection__modal} ${styles.shopSection__modal_none}`
				}
				onClick={(e) => handleCloser(e)}
				id='modal'
			>
				<div className={styles.shopSection__modalInner} id='modalInner'>
					{modalIsOpened && <ProductModal onClick={closeModal} />}
				</div>
			</div>
		</section>
	);
};
