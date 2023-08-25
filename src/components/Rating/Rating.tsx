import sprite from '../../assets/images/sprite.svg';
import styles from './Rating.module.scss';

type RatingProps = {
	rating: number;
	big: boolean;
};

export const Rating: React.FC<RatingProps> = ({ rating, big }) => {
	return Array.from({ length: 5 }).map((__, index) => (
		<div
			className={
				big ? `${styles.stars} ${styles.stars_big}` : styles.stars
			}
			key={Math.round(Math.random() * 10000000000)}
		>
			<div className={styles.stars__inner}>
				<svg className={styles.stars__svg}>
					{
						<use
							className={
								index + 1 <= rating
									? `${styles.stars__icon} ${styles.stars__icon_gold}`
									: `${styles.stars__icon} ${styles.stars__icon_gray}`
							}
							xlinkHref={`${sprite}#star`}
						/>
					}
				</svg>
			</div>
		</div>
	));
};
