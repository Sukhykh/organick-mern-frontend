import { Subtitle } from '../Subtitle/Subtitle.tsx';
import styles from './OfferBannerCard.module.scss';

type OfferBannerCardProps = {
	data: {
		id: number;
		colorWhite: boolean;
		subtitle: string;
		title: string;
		picture: string;
		alt: string;
	};
};

export const OfferBannerCard: React.FC<OfferBannerCardProps> = ({ data }) => {
	const { colorWhite, subtitle, title, picture, alt } = data;
    
	return (
		<div className={styles.offerBannerCard}>
			<div className={styles.offerBannerCard__imgWrapper}>
				<picture>
					<source srcSet={alt} type='image/webp' />
					<img
						className={styles.offerBannerCard__img}
						src={picture}
						alt='banner'
						width={682}
						height={367}
					/>
				</picture>
			</div>
			<div className={styles.offerBannerCard__textWrapper}>
				<Subtitle title={subtitle} green={colorWhite ? false : true} />
				<h3
					className={
						colorWhite
							? `${styles.offerBannerCard__title} ${styles.offerBannerCard__title_white}`
							: `${styles.offerBannerCard__title} ${styles.offerBannerCard__title_blue}`
					}
				>
					{title}
				</h3>
			</div>
		</div>
	);
};
