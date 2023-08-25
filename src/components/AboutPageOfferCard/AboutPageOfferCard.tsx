import styles from './AboutPageOfferCard.module.scss';

type AboutPageOfferCardProps = {
	title: string;
	picture: string;
};

export const AboutPageOfferCard: React.FC<AboutPageOfferCardProps> = ({
	title,
	picture,
}) => {
	return (
		<div className={styles.offerCard}>
			<div className={styles.offerCard__imgWrapper}>
				<img
					className={styles.offerCard__img}
					src={picture}
					alt={title}
				/>
			</div>
			<h4 className={styles.offerCard__title}>{title}</h4>
		</div>
	);
};
