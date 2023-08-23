import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { qualityCardData } from '../../data/qualityCardData.ts';
import { QualityCard } from '../../components/QualityCard/QualityCard.tsx';
import { QualityRating } from '../../components/QualityRating/QualityRating.tsx';
import { SmallBanner } from '../../components/SmallBanner/SmallBanner.tsx';
import { NewsForm } from '../../components/NewsForm/NewsForm.tsx';
import backgroundWebp from '../../assets/images/Quality/quality.webp';
import backgroundWebpLittle from '../../assets/images/Quality/quality@05.webp';
import backgroundPng from '../../assets/images/Quality/quality.png';
import bannerPng from '../../assets/images/Banners/Quality/quality-banner.png';
import bannerWebp from '../../assets/images/Banners/Quality/quality-banner.webp';
import patternPng from '../../assets/images/Banners/Quality/quality-pattern.png';
import patternWebp from '../../assets/images/Banners/Quality/quality-pattern.webp';
import styles from './Quality.module.scss';

const data = {
	bannerPng: bannerPng,
	bannerWebp: bannerWebp,
	patternPng: patternPng,
	patternWebp: patternWebp,
	title: 'Quality Standard',
};

export const Quality = () => {
	return (
		<>
			<SmallBanner data={data} />
			<section className={styles.quality}>
				<div className={styles.quality__container}>
					<div className={styles.quality__wrapper}>
						<div className={styles.quality__imgWrapper}>
							<picture>
								<source
									srcSet={backgroundWebp}
									type='image/webp'
									media='(min-width: 500px)'
								/>
								<source
									srcSet={backgroundWebpLittle}
									type='image/webp'
									media='(max-width: 500px)'
								/>
								<img
									className={styles.quality__img}
									src={backgroundPng}
									alt='quality'
								/>
							</picture>
						</div>
						<div className={styles.quality__contant}>
							<div className={styles.quality__titleContant}>
								<SectionTitle
									title='Organic Store Services'
									black
									hero={false}
								/>
								<p className={styles.quality__text}>
									It is a long established fact that a reader
									will be distracted by the readable content
									of a page when looking a layout. The point
									of using Lorem Ipsum is that it has a
									more-or-less normal distribution of letters,
									as opposed to using 'Content here, content
									here', making it look like readable English.
								</p>
								<p className={styles.quality__text}>
									Many desktop publishing packages and web
									page editors now use Lorem Ipsum as their
									default model text, and auncover many web
									sites still in their infancy. Various
									versions have evolved over the years
								</p>
							</div>
							<div className={styles.quality__cardsContant}>
								{qualityCardData?.map((card) =>
									card.id % 2 === 0 ? (
										<QualityCard
											data={card}
											reverse
											key={card.id}
										/>
									) : (
										<QualityCard
											data={card}
											reverse={false}
											key={card.id}
										/>
									)
								)}
							</div>
							<div className={styles.quality__infoContant}>
								<div className={styles.quality__infoText}>
									<h3 className={styles.quality__title}>
										We farm your land
									</h3>
									<p className={styles.quality__text}>
										It is a long established fact that a
										reader will be distracted by the
										readable content of a page when looking
										a layout. The point of using Lorem Ipsum
										is that it has a more-or-less normal
										distribution of letters, as opposed to
										using 'Content here, content here',
										making it look like readable English.
									</p>
								</div>
								<div className={styles.quality__rating}>
									<QualityRating
										number='01'
										title='Best quality support'
									/>
									<QualityRating
										number='02'
										title='Money back guarantee'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<NewsForm />
		</>
	);
};
