import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { AboutPageOfferCard } from '../AboutPageOfferCard/AboutPageOfferCard.tsx';
import spicy from '../../assets/images/AboutOffers/spicy.png';
import nuts from '../../assets/images/AboutOffers/nuts-feesd.png';
import fruits from '../../assets/images/AboutOffers/fruits.png';
import vegetable from '../../assets/images/AboutOffers/vegetable.png';
import styles from './AboutPageOffer.module.scss';

export const AboutPageOffers = () => {
	return (
		<section className={styles.aboutOffers}>
			<div className={styles.aboutOffers__container}>
				<div className={styles.aboutOffers__wrapper}>
					<Subtitle title='about us' green />
					<div className={styles.aboutOffers__titleWrapper}>
						<SectionTitle
							title='what we offer for you'
							black={false}
							hero={false}
						/>
					</div>
					<div className={styles.aboutOffers__cardsWrapper}>
						<AboutPageOfferCard 
                            title='spicy' 
                            picture={spicy} />
						<AboutPageOfferCard
							title='nuts & feeds'
							picture={nuts}
						/>
						<AboutPageOfferCard 
                            title='fruits' 
                            picture={fruits} />
						<AboutPageOfferCard
							title='vegetable'
							picture={vegetable}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
