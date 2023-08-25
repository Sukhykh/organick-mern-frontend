import { AboutSectionCard } from '../AboutSectionCard/AboutSectionCard.tsx';
import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { SiteButton } from '../SiteButton/SiteButton.tsx';
import { aboutSectionData } from '../../data/aboutSectionData.ts';
import backgroundWebp from '../../assets/images/About/about.webp';
import backgroundPng from '../../assets/images/About/about.png';
import backgroundWebpLittle from '../../assets/images/About/about@05.webp';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.aboutSection__container}>
				<div className={styles.aboutSection__wrapper}>
					<div className={styles.aboutSection__background}>
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
								className={styles.aboutSection__backgroundImg}
								src={backgroundPng}
								alt='about-picture'
							/>
						</picture>
					</div>
					<div className={styles.aboutSection__contant}>
						<Subtitle title='About us' green />
						<div className={styles.aboutSection__titleWrapper}>
							<SectionTitle
								title='We Believe in Working Accredited Farmers'
								black
								hero={false}
							/>
						</div>
						<p className={styles.aboutSection__text}>
							Simply dummy text of the printing and typesetting
							industry. Lorem had ceased to been the industry's
							standard dummy text ever since the 1500s, when an
							unknown printer took a galley.
						</p>
						<div className={styles.aboutSection__cardWrapper}>
							{aboutSectionData?.map((el) => (
								<AboutSectionCard data={el} key={el.id} />
							))}
						</div>
						<SiteButton title='shop now' color='blue' path='shop' />
					</div>
				</div>
			</div>
		</section>
	);
};
