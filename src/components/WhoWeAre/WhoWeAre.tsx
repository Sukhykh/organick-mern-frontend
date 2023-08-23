import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { WhoWeAreCard } from '../WhoWeAreCard/WhoWeAreCard.tsx';
import { whoWeAreData } from '../../data/whoWeAreData.ts';
import styles from './WhoWeAre.module.scss';
import backgroundPng from '../../assets/images/WhoWeAre/whoWeAre.jpg';
import backgroundWebp from '../../assets/images/WhoWeAre/whoWeAre.webp';
import backgroundWebpLittle from '../../assets/images/WhoWeAre/whoWeAre@05.webp';

export const WhoWeAre = () => {
	return (
		<section className={styles.whoWeAre}>
			<div className={styles.whoWeAre__container}>
				<div className={styles.whoWeAre__wrapper}>
					<div className={styles.whoWeAre__background}>
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
								className={styles.whoWeAre__backgroundImg}
								src={backgroundPng}
								alt='about-picture'
							/>
						</picture>
					</div>
					<div className={styles.whoWeAre__contant}>
						<Subtitle title='Eco Friendly' green={true} />
						<div className={styles.whoWeAre__titleWrapper}>
							<SectionTitle
								title='Econis is a Friendly Organic Store'
								black={true}
								hero={false}
							/>
						</div>
						<div className={styles.whoWeAre__cardWrapper}>
							{whoWeAreData?.map((el) => (
								<WhoWeAreCard data={el} key={el.id} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
