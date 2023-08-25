import styles from './AdvantageCard.module.scss';

type AdvantageCardProps = {
	data: {
		id: number;
		picture: string;
		title: string;
		text: string;
	};
};

export const AdvantageCard: React.FC<AdvantageCardProps> = ({ data }) => {
	return (
		<div className={styles.advantageCard}>
			<div className={styles.advantageCard__imgWrapper}>
				<img
					className={styles.advantageCard__img}
					src={data.picture}
					alt={data.title}
					width={42}
					height={42}
				/>
			</div>
			<h4 className={styles.advantageCard__title}>{data.title}</h4>
			<p className={styles.advantageCard__text}>{data.text}</p>
		</div>
	);
};
