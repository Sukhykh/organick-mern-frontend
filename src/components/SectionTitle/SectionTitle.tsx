import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
	title: string;
	black: boolean;
	hero: boolean;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
	title,
	black,
	hero,
}) => {
	return hero ? (
		<h1
			className={
				black
					? `${styles.heroTitle} ${styles.heroTitle_black}`
					: `${styles.heroTitle} ${styles.heroTitle_white}`
			}
		>
			{title}
		</h1>
	) : (
		<h2
			className={
				black
					? `${styles.title} ${styles.title_black}`
					: `${styles.title} ${styles.title_white}`
			}
		>
			{title}
		</h2>
	);
};
