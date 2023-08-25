import backgroundWebp from '../../assets/images/AboutUsPage/about.webp';
import backgroundPng from '../../assets/images/AboutUsPage/about.png';
import backgroundWebpLittle from '../../assets/images/AboutUsPage/about@05.webp';
import cardOne from '../../assets/images/AboutUsPage/modern-agriculture-equipment.png';
import cardTwo from '../../assets/images/AboutUsPage/no-growth-hormones-are-used.png';
import styles from './AboutPageAbout.module.scss';
import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { SiteButton } from '../SiteButton/SiteButton.tsx';
import { AboutPageCatd } from '../AboutPageCatd/AboutPageCatd.tsx';

export const AboutPageAbout = () => {
	return (
		<section className={styles.about}>
			<div className={styles.about__container}>
				<div className={styles.about__wrapper}>
					<div className={styles.about__background}>
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
								className={styles.about__img}
								src={backgroundPng}
								alt='about-picture'
							/>
						</picture>
					</div>
					<div className={styles.about__contant}>
						<Subtitle title='About us' green />
						<div className={styles.about__titleWrapper}>
							<SectionTitle
								title='We do Creative Things for Success'
								black
								hero={false}
							/>
						</div>
						<p className={styles.about__text}>
							Simply dummy text of the printing and typesetting
							industry. Lorem had ceased to been the industry's
							standard dummy text ever since the 1500s, when an
							unknown printer took a galley.
						</p>
						<p className={styles.about__text}>
							Simply dummy text of the printing and typesetting
							industry. Lorem had ceased to been the industry's
							standard dummy text ever since the 1500s, when an
							unknown printer took a galley.
						</p>
						<div className={styles.about__cardWrapper}>
							<AboutPageCatd
								picture={cardOne}
								title='modern agriculture equipment'
							/>
							<AboutPageCatd
								picture={cardTwo}
								title='no growth hormones are used'
							/>
						</div>
						<SiteButton
							title='explore more'
							color='blue'
							path='/projects'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
