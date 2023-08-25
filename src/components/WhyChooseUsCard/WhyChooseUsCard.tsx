import styles from './WhyChooseUsCard.module.scss';

type WhyChooseUsCardProps = {
	title: string;
	text: string;
};

export const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
	title,
	text,
}) => {
	return (
		<div className={styles.whyChooseUsCard}>
			<div className={styles.whyChooseUsCard__titleBar}>
				<span className={styles.whyChooseUsCard__decor}></span>
				<h4 className={styles.whyChooseUsCard__title}>{title}</h4>
			</div>
			<p className={styles.whyChooseUsCard__text}>{text}</p>
		</div>
	);
};
