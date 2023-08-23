import styles from './GalleryCard.module.scss';

type GalleryCardProps = {
	data: {
		id: number;
		title: string;
		imgJpg: string;
		imgWebp: string;
	};
	onClick: (e: any) => void;
};

export const GalleryCard: React.FC<GalleryCardProps> = ({ data, onClick }) => {
	const { title, imgJpg, imgWebp } = data;

	return (
		<a className={styles.galleryCard} href='#' onClick={(e) => onClick(e)}>
			<div className={styles.galleryCard__wrapper}>
				<picture>
					<source srcSet={imgWebp} type='image/webp' />
					<img
						className={styles.galleryCard__image}
						src={imgJpg}
						alt='galleryPicture'
						width={612}
						height={583}
					/>
				</picture>
			</div>
			<div className={styles.galleryCard__text}>
				<p className={styles.galleryCard__title}>{title}</p>
			</div>
		</a>
	);
};