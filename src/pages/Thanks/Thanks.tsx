import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { SmallBanner } from '../../components/SmallBanner/SmallBanner.tsx';
import styles from './Thanks.module.scss';
import bannerPng from '../../assets/images/Banners/Thanks/thanks.png';
import bannerWebp from '../../assets/images/Banners/Thanks/thanks.webp';

const data = {
	bannerPng: bannerPng,
	bannerWebp: bannerWebp,
	patternPng: undefined,
	patternWebp: undefined,
	title: undefined,
};

export const Thanks = () => {
	return (
		<section className={styles.thanks}>
			<div className={styles.thanks__container}>
				<div className={styles.thanks__wrapper}>
					<SectionTitle
						title='Thank you for your order'
						black={true}
						hero={true}
					/>
				</div>
			</div>
			<div className={styles.thanks__bannerWrapper}>
				<SmallBanner data={data} />
			</div>
		</section>
	);
};
