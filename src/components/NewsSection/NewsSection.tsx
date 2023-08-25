import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { Subtitle } from '../Subtitle/Subtitle';
import { NewsCard } from '../NewsCard/NewsCard.tsx';
import { newsCardData } from '../../data/newsCardData.ts';
import { SiteButton } from '../SiteButton/SiteButton.tsx';
import styles from './NewsSection.module.scss';

export const NewsSection = () => {
	const cardToShow = newsCardData.slice(0, 2);

	const handleClicker = (e: any) => {
		e.preventDefault();
	};

	return (
		<section className={styles.newsSection}>
			<div className={styles.newsSection__container}>
				<div className={styles.newsSection__wrapper}>
					<div className={styles.newsSection__titleWrapper}>
						<div className={styles.newsSection__titleOuther}>
							<Subtitle green title='news' />
							<SectionTitle
								title='Discower weekly content about organic food & more'
								hero={false}
								black
							/>
						</div>
						< SiteButton color='white' path='news' title='more news'/>
					</div>
					<div className={styles.newsSection__cardWrapper}>
						{cardToShow?.map((card) => (
							<NewsCard
								data={card}
								onPage
								onClick={handleClicker}
								key={card.id}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
