import { GalleryCard } from '../GalleryCard/GalleryCard.tsx';
import { galleryData } from '../../data/galleryData.ts';
import styles from './Gallery.module.scss';

export const Gallery = () => {
	const clicker = (e: any) => {
		e.preventDefault();
	};

	return (
		<section className={styles.gallery}>
			<div className={styles.gallery__wrapper}>
				{galleryData?.map((card) => (
					<GalleryCard data={card} onClick={clicker} key={card.id} />
				))}
			</div>
		</section>
	);
};