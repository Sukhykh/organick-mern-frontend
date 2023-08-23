import styles from './AboutSectionCard.module.scss';

type aboutSectionCardProps = {
	data: {
		id: number;
		title: string;
		text: string;
		picture: string;
	};
};

export const AboutSectionCard: React.FC<aboutSectionCardProps> = ({ data }) => {
	const { title, text, picture, id } = data;

	return (
		<div className={styles.aboutSectioCard}>
			<div
				className={`${styles.aboutSectioCard__imgWrapper} ${
					id % 2 === 0
						? styles.aboutSectioCard__imgWrapper_even
						: styles.aboutSectioCard__imgWrapper_odd
				}`}
			>
				<img
					className={styles.aboutSectioCard__img}
					src={picture}
					alt='icon'
					width={46}
					height={46}
				/>
			</div>
			<div className={styles.aboutSectioCard__textWrapper}>
				<h4 className={styles.aboutSectioCard__title}>{title}</h4>
				<p className={styles.aboutSectioCard__text}>{text}</p>
			</div>
		</div>
	);
};