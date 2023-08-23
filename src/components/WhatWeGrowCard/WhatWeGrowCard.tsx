import styles from './WhatWeGrowCard.module.scss';

type WhatWeGrowCardProps = {
	data: {
		id: number;
		picture: string;
		title: string;
		text: string;
		start: boolean;
	};
};

export const WhatWeGrowCard: React.FC<WhatWeGrowCardProps> = ({ data }) => {
	return (
		<div
			className={`${styles.whatWeGrowCard} ${
				styles[`whatWeGrowCard_${data.start ? 'start' : 'end'}`]
			}`}
		>
			<div className={styles.whatWeGrowCard__imgWrapper}>
				<img
					className={styles.whatWeGrowCard__img}
					src={data.picture}
					alt='icon'
					width={46}
					height={46}
				/>
			</div>
			<h3 className={styles.whatWeGrowCard__title}>{data.title}</h3>
			<p className={styles.whatWeGrowCard__text}>{data.text}</p>
		</div>
	);
};
