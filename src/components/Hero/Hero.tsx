import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { SiteButton } from '../SiteButton/SiteButton.tsx';
import backgroundPng from '../../assets/images/Hero/background.png';
import backgroundWebp from '../../assets/images/Hero/background.webp';
import styles from './Hero.module.scss';

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__background}>
				<picture>
					<source srcSet={backgroundWebp} type='image/webp' />
					<img
						className={styles.hero__backgroundImg}
						src={backgroundPng}
						alt='hero'
						width={1920}
						height={898}
					/>
				</picture>
			</div>
			<div className={styles.hero__container}>
				<div className={styles.hero__wrapper}>
					<Subtitle title='100% Natural Food' green={true} />
					<div className={styles.hero__margin}>
						<SectionTitle
							title='Choose the best healthier way of life'
							black={true}
							hero={true}
						/>
					</div>
					<SiteButton
						title='Explore Now'
						color='yellow'
						path='pages/quality'
					/>
				</div>
			</div>
		</section>
	);
};