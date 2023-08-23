import { Header } from '../../components/Header/Header.tsx';
import { Footer } from '../../components/Footer/Footer.tsx';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { SiteButton } from '../../components/SiteButton/SiteButton.tsx';
import styles from './Error.module.scss';
import pattern from '../../assets/images/Error/pattern.png';
import picturePng from '../../assets/images/Error/pattern.png';
import pictureWebp from '../../assets/images/Error/error-image.webp';
import pictureWebpSmall from '../../assets/images/Error/error-image@05.webp';

export const Error = () => {
	return (
		<>
			<Header />
			<section className={styles.error}>
				<div className={styles.error__background}>
					<div className={styles.error__imgWrapper}>
						<picture>
							<source
								srcSet={pictureWebp}
								type='image/webp'
								media='(min-width: 500px)'
							/>
							<source
								srcSet={pictureWebpSmall}
								type='image/webp'
								media='(max-width: 500px)'
							/>
							<img
								className={styles.error__backgroundImg}
								src={picturePng}
								alt='picture'
								width={1920}
								height={898}
							/>
						</picture>
					</div>
					<div className={styles.error__patternWrapper}>
						<img
							className={styles.error__backgroundImg}
							src={pattern}
							alt='pattern'
							width={1920}
							height={898}
						/>
					</div>
				</div>
				<div className={styles.error__container}>
					<div className={styles.error__wrapper}>
						<div className={styles.error__content}>
							<p className={styles.error__text404}>404</p>
							<SectionTitle title='page not found' black hero />
							<p className={styles.error__descr}>
								The page you are looking for doesn't exist or
								has been moved
							</p>
							<SiteButton
								title='go to homepage'
								color='blue'
								path='/'
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};
