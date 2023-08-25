import styles from './AboutPageCatd.module.scss';

type AboutPageCatdProps = {
	title: string;
	picture: string;
};

export const AboutPageCatd: React.FC<AboutPageCatdProps> = ({
	title,
	picture,
}) => {
	return (
		<div className={styles.aboutPageCard}>
			<div className={styles.aboutPageCard__imgWrapper}>
				<img
					className={styles.aboutPageCard__imgWrapper}
					src={picture}
					alt='icon'
					width={56}
					height={56}
				/>
			</div>
			<h4 className={styles.aboutPageCard__title}>{title}</h4>
		</div>
	);
};
