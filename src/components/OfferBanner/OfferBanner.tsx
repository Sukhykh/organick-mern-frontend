import { offerBannerData } from '../../data/offerBannerData.ts';
import { OfferBannerCard } from '../OfferBannerCard/OfferBannerCard.tsx';
import styles from './OfferBanner.module.scss';

export const OfferBanner = () => {
	return (
		<section className={styles.offerbanner}>
			<div className={styles.offerbanner__container}>
				<div className={styles.offerbanner__wrapper}>
					{offerBannerData?.map((el) => (
						<OfferBannerCard data={el} key={el.id} />
					))}
				</div>
			</div>
		</section>
	);
};
