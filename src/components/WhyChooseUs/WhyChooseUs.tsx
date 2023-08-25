import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { WhyChooseUsCard } from '../WhyChooseUsCard/WhyChooseUsCard.tsx';
import { AdvantageCard } from '../AdvantageCard/AdvantageCard.tsx';
import { advantagesCardsData } from '../../data/advantagesCardsData.ts';
import whyChooseUsPng from '../../assets/images/AboutUsPage/why-choose-us.png';
import whyChooseUsWebp from '../../assets/images/AboutUsPage/why-choose-us.webp';
import whyChooseUsWebpSmall from '../../assets/images/AboutUsPage/why-choose-us@05.webp';
import styles from './WhyChooseUs.module.scss';

export const WhyChooseUs = () => {
	return (
		<section className={styles.whyChooseUs}>
			<div className={styles.whyChooseUs__container}>
				<div className={styles.whyChooseUs__wrapper}>
					<div className={styles.whyChooseUs__contentWrapper}>
						<div className={styles.whyChooseUs__content}>
							<Subtitle title='why choose us?' green />
							<div className={styles.whyChooseUs__titleWrapper}>
								<SectionTitle
									title='we do not buy from the open marcet &amp; traders.'
									black
									hero={false}
								/>
							</div>
							<p className={styles.whyChooseUs__text}>
								Simply dummy text of the printing and
								typesetting industry. Lorem had ceased to been
								the industry's standard the 1500s, when an
								unknown
							</p>
							<div className={styles.whyChooseUs__cardsWrapper}>
								<WhyChooseUsCard
									title='100% Natural Product'
									text='Simply dummy text of the printing and typesetting industry Lorem Ipsum'
								/>
								<WhyChooseUsCard
									title='Increases resistance'
									text='Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing'
								/>
							</div>
						</div>
						<div className={styles.whyChooseUs__imgWrapper}>
							<picture>
								<source
									srcSet={whyChooseUsWebp}
									type='image/webp'
									media='(min-width: 500px)'
								/>
								<source
									srcSet={whyChooseUsWebpSmall}
									type='image/webp'
									media='(max-width: 500px)'
								/>
								<img
									className={styles.whyChooseUs__img}
									src={whyChooseUsPng}
									alt='picture'
									width={678}
									height={579}
								/>
							</picture>
						</div>
					</div>
					<div className={styles.whyChooseUs__advantagesCards}>
						{advantagesCardsData?.map((card) => (
							<AdvantageCard data={card} key={card.id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
