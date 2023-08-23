import { useCart } from '../../context/CartContext.tsx';
import { CartProduct } from '../../types/product.ts';
const baseUrl = import.meta.env.VITE_SERVER;
import styles from './CartMenuItem.module.scss';

type CartMenuItemProps = {
	data: CartProduct;
};

export const CartMenuItem: React.FC<CartMenuItemProps> = ({ data }) => {
	const { setRundomQuantity, removeFromCart } = useCart();
	const { product, quantity } = data;
	const priceCurent =
		product.discount === 0
			? product.price.toFixed(2)
			: product.discount.toFixed(2);

	const handleClick = (e: any) => {
		e.preventDefault();
		removeFromCart(product._id);
	};

	return (
		<div className={styles.cartMenuItem}>
			<div className={styles.cartMenuItem__product}>
				<div className={styles.cartMenuItem__imgWrapper}>
					<img
						className={styles.cartMenuItem__img}
						src={`${baseUrl}${product.image}`}
						alt={product.title}
						width={226}
						height={192}
					/>
				</div>
				<div className={styles.cartMenuItem__descr}>
					<h3 className={styles.cartMenuItem__title}>
						{product.title}
					</h3>
					<div className={styles.cartMenuItem__priceBar}>
						{product.discount !== 0 && (
							<span className={styles.cartMenuItem__priceOld}>
								&#36;{product.price.toFixed(2)}
							</span>
						)}
						<span className={styles.cartMenuItem__priceCurent}>
							&#36;{priceCurent}
						</span>
					</div>
				</div>
			</div>
			<div className={styles.cartMenuItem__cartLable}>
				<p className={styles.cartMenuItem__cartTitle}>Quantity :</p>
				<input
					className={styles.cartMenuItem__cartInput}
					type='number'
					min={0}
					name='quantity'
					id='quantity'
					value={quantity}
					onChange={(e) =>
						setRundomQuantity(product._id, Number(e.target.value))
					}
					required
				/>
				<a
					className={styles.cartMenuItem__button}
					href='#'
					onClick={(e) => handleClick(e)}
				>
					X
				</a>
			</div>
		</div>
	);
};