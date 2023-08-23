import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import backgroundWebp from '../../assets/images/Services/services-video.webp';
import backgroundWebpLittle from '../../assets/images/Services/services-video@05.webp';
import backgroundPng from '../../assets/images/Services/services-video.png';
import sprite from '../../assets/images/sprite.svg';
import styles from './VideoSection.module.scss';

export const VideoSection = () => {
	const handleClicker = (e: any) => {
		e.preventDefault();
	};

	return (
		<section className={styles.vodeoSection}>
			<div className={styles.vodeoSection__imgWrapper}>
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
						className={styles.vodeoSection__img}
						src={backgroundPng}
						alt='about-picture'
					/>
				</picture>
			</div>
			<div className={styles.vodeoSection__container}>
				<div className={styles.vodeoSection__wrapper}>
					<Subtitle title='Organic Only' green />
					<div className={styles.vodeoSection__titleWrapper}>
						<SectionTitle
							title='Everyday Fresh &amp; Clean'
							black
							hero={false}
						/>
					</div>
					<p className={styles.vodeoSection__text}>
						Simply dummy text of the printing and typesetting
						industry. Lorem had ceased to been the industry's
						standard dummy text ever since the
					</p>
					<a
						className={styles.vodeoSection__button}
						href='#'
						onClick={(e) => handleClicker(e)}
					>
						<svg className={styles.vodeoSection__svg}>
							<use
								className={styles.vodeoSection__icon}
								xlinkHref={`${sprite}#play`}
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};
