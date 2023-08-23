import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './SmallBanner.module.scss';

type SmallBannerProps = {
	data: {
		bannerPng: string;
		bannerWebp: string;
		patternPng: string | undefined;
		patternWebp: string | undefined;
		title: string | undefined;
	};
};

export const SmallBanner: React.FC<SmallBannerProps> = ({ data }) => {
	const { bannerPng, bannerWebp, patternPng, patternWebp, title } = data;
	const isPattern: boolean =
		patternPng !== undefined && patternWebp !== undefined;

	return (
		<div
			className={
				isPattern
					? styles.smallBanner
					: `${styles.smallBanner} ${styles.smallBanner_noPattern}`
			}
		>
			<div className={styles.smallBanner__bannerWrapper}>
				<picture>
					<source srcSet={bannerWebp} type='image/webp' />
					<img
						className={
							isPattern
								? styles.smallBanner__banner
								: `${styles.smallBanner__banner} ${styles.smallBanner__banner_noPattern}`
						}
						src={bannerPng}
						alt='banner'
						width={1920}
						height={450}
					/>
				</picture>
			</div>
			{isPattern && (
				<div className={styles.smallBanner__patternWrapper}>
					<picture>
						<source srcSet={patternWebp} type='image/webp' />
						<img
							className={styles.smallBanner__pattern}
							src={patternPng}
							alt='pattern'
							width={1920}
							height={450}
						/>
					</picture>
				</div>
			)}
			{title && (
				<div className={styles.smallBanner__titleWrapper}>
					<SectionTitle title={title} black={true} hero={true} />
				</div>
			)}
		</div>
	);
};
