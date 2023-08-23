import { useCart } from '../../context/CartContext.tsx';
import { CartMenuItem } from '../CartMenuItem/CartMenuItem';
import styles from './CartMenu.module.scss';

export const CartMenu = () => {
	const { cartItems, cartTotal, cartDiscount } = useCart();

	return (
		<section className={styles.cartMenu}>
			<div className={styles.cartMenu__container}>
				<div className={styles.cartMenu__wrapper}>
					<div className={styles.cartMenu__itemWrapper}>
						{cartItems.length ? (
							cartItems.map((el) => (
								<CartMenuItem data={el} key={el.product._id} />
							))
						) : (
							<h2 className={styles.cartMenu__warning}>
								Cart is empty!
							</h2>
						)}
					</div>
					<div className={styles.cartMenu__totalBar}>
						<div className={styles.cartMenu__cost}>
							<span className={styles.cartMenu__costTitle}>
								Total cost
							</span>
							<span className={styles.cartMenu__costValue}>
								{cartTotal.toFixed(2)}&#36;
							</span>
						</div>
						<div className={styles.cartMenu__discount}>
							<span className={styles.cartMenu__discountTitle}>
								Discount
							</span>
							<span className={styles.cartMenu__discountValue}>
								{cartDiscount.toFixed(2)}&#36;
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};