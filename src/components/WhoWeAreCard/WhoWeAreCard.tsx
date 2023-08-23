import styles from './WhoWeAreCard.module.scss';

type WhoWeAreCardProps = {
	data: {
		id: number;
		title: string;
		text: string;
	};
};

export const WhoWeAreCard: React.FC<WhoWeAreCardProps> = ({ data }) => {
	const { title, text } = data;
	return (
		<div className={styles.whoWeAreCard}>
			<h3 className={styles.whoWeAreCard__title}>{title}</h3>
			<p className={styles.whoWeAreCard__text}>{text}</p>
		</div>
	);
};
