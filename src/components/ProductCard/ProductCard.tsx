import { Product } from '../../types/product.ts';
import { Rating } from '../Rating/Rating.tsx';
const baseUrl = import.meta.env.VITE_SERVER;
import styles from './ProductCard.module.scss';

type ProductCardProps = {
	product: Product;
	onClick: (el: Product) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
	product,
	onClick,
}) => {
	const priceCurent =
		product.discount === 0
			? product.price.toFixed(2)
			: product.discount.toFixed(2);

	return (
		<div className={styles.productCard} onClick={() => onClick(product)}>
			<div className={styles.productCard__wrapper}>
				<div className={styles.productCard__tag}>{product.tag}</div>
				<div className={styles.productCard__imgWrapper}>
					<img
						className={styles.productCard__img}
						src={`${baseUrl}${product.image}`}
						alt={product.title}
						width={335}
						height={324}
					/>
				</div>
				<div className={styles.productCard__title}>{product.title}</div>
				<div className={styles.productCard__priceBar}>
					<div className={styles.productCard__price}>
						{product.discount !== 0 && (
							<span className={styles.productCard__priceOld}>
								&#36;{product.price.toFixed(2)}
							</span>
						)}
						<span className={styles.productCard__priceCurent}>
							&#36;{priceCurent}
						</span>
					</div>
					<div className={styles.productCard__rating}>
						{product.rating && (
							<Rating rating={product.rating} big={false} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
