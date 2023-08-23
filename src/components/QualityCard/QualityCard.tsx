import styles from './QualityCard.module.scss';

type QualityCardProps = {
	data: {
		id: number;
		picture: {
			png: string;
			webp: string;
		};
		title: string;
		text: string;
	};
	reverse: boolean;
};

export const QualityCard: React.FC<QualityCardProps> = ({ data, reverse }) => {
	return (
		<div
			className={
				reverse
					? `${styles.qualityCard} ${styles.qualityCard_reverse}`
					: styles.qualityCard
			}
		>
			<div className={styles.qualityCard__imgWrapper}>
				<picture>
					<source srcSet={data.picture.webp} type='image/webp' />
					<img
						className={styles.qualityCard__img}
						src={data.picture.png}
						alt='quality-card-picture'
						width={379}
						height={252}
					/>
				</picture>
			</div>
			<div className={styles.qualityCard__content}>
				<h4 className={styles.qualityCard__title}>{data.title}</h4>
				<p className={styles.qualityCard__text}>{data.text}</p>
			</div>
		</div>
	);
};
