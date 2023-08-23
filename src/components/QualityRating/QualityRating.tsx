import styles from './QualityRating.module.scss';

type QualityRatingProps = {
	number: string;
	title: string;
};

export const QualityRating: React.FC<QualityRatingProps> = ({
	number,
	title,
}) => {
	return (
		<div className={styles.qualityRating}>
			<div className={styles.qualityRating__number}>{number}</div>
			<h4 className={styles.qualityRating__title}>{title}</h4>
		</div>
	);
};
