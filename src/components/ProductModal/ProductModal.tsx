import { useState } from 'react';
import { Rating } from '../Rating/Rating.tsx';
import { useProductStore } from '../../store/productStore.ts';
import { useCart } from '../../context/CartContext.tsx';
import sprite from '../../assets/images/sprite.svg';
import styles from './ProductModal.module.scss';
const baseUrl = import.meta.env.VITE_SERVER;

type ProductModalProps = {
	onClick: () => void;
};

export const ProductModal: React.FC<ProductModalProps> = ({ onClick }) => {
	const { setRundomQuantity, getCartItemQuantity } = useCart();
	const dataId = useProductStore((state) => state.curentProduct);
	const findProductById = useProductStore((state) => state.findProductById);
	const data = findProductById(dataId);
	const [quantity, setQuantity] = useState<number>(
		getCartItemQuantity(dataId)
	);
	const [isInfo, setIsInfo] = useState<boolean>(false);

	const priceCurent =
		data?.discount === 0
			? data?.price.toFixed(2)
			: data?.discount.toFixed(2);

	const handleClick = (e: any) => {
		e.preventDefault();
		onClick();
	};

	const handleToggle = (e: any) => {
		e.preventDefault();
		setIsInfo(!isInfo);
	};

	const updateCart = (e: any) => {
		e.preventDefault();
		setRundomQuantity(dataId, quantity);
	};

	return (
		<div className={styles.productModal}>
			<div className={styles.productModal__container}>
				<a
					className={styles.productModal__closeButton}
					href='#'
					onClick={(e) => handleClick(e)}
				>
					X
				</a>
				<div className={styles.productModal__wrapper}>
					<div className={styles.productModal__productWrapper}>
						<div className={styles.productModal__imgWrapper}>
							<img
								className={styles.productModal__img}
								src={`${baseUrl}${data?.image}`}
								alt={data?.title}
								width={600}
								height={563}
							/>
							<div className={styles.productModal__tag}>
								{data?.tag}
							</div>
						</div>
						<div className={styles.productModal__product}>
							<h3 className={styles.productModal__title}>
								{data?.title}
							</h3>
							<div className={styles.productModal__rating}>
								{data?.rating && (
									<Rating rating={data?.rating} big={false} />
								)}
							</div>
							<div className={styles.productModal__price}>
								{data?.discount !== 0 && (
									<span
										className={
											styles.productModal__priceOld
										}
									>
										&#36;{data?.price.toFixed(2)}
									</span>
								)}
								<span
									className={styles.productModal__priceCurent}
								>
									&#36;{priceCurent}
								</span>
							</div>
							<p className={styles.productModal__description}>
								{data?.description}
							</p>
							<div className={styles.productModal__cart}>
								<div className={styles.productModal__cartLable}>
									<p
										className={
											styles.productModal__cartTitle
										}
									>
										Quantity :
									</p>
									<input
										className={
											styles.productModal__cartInput
										}
										type='number'
										min={0}
										name='quantity'
										id='quantity'
										value={quantity}
										onChange={(e) =>
											setQuantity(Number(e.target.value))
										}
										required
									/>
								</div>
								<a
									className={styles.productModal__cartButton}
									href='#'
									onClick={(e) => updateCart(e)}
								>
									<span
										className={
											styles.productModal__buttonText
										}
									>
										Add to cart
									</span>
									<span
										className={
											styles.productModal__buttonItem
										}
									>
										<svg
											className={
												styles.productModal__buttonSvg
											}
										>
											<use
												className={
													styles.productModal__buttonIcon
												}
												xlinkHref={`${sprite}#buttonArrow`}
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className={styles.productModal__info}>
						<div className={styles.productModal__infoButtonBar}>
							<a
								className={
									!isInfo
										? `${styles.productModal__infoButton} ${styles.productModal__infoButton_activ}`
										: styles.productModal__infoButton
								}
								href='#'
								onClick={(e) => handleToggle(e)}
							>
								Product Description
							</a>
							<a
								className={
									isInfo
										? `${styles.productModal__infoButton} ${styles.productModal__infoButton_activ}`
										: styles.productModal__infoButton
								}
								href='#'
								onClick={(e) => handleToggle(e)}
							>
								Additional Info
							</a>
						</div>
						<p className={styles.productModal__infoText}>
							{isInfo
								? data?.additionalInfo
								: data?.productDescription}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
