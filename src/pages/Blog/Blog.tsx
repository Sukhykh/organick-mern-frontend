import { SmallBanner } from '../../components/SmallBanner/SmallBanner.tsx';
import { NewsForm } from '../../components/NewsForm/NewsForm.tsx';
import { NewsCard } from '../../components/NewsCard/NewsCard.tsx';
import { newsCardData } from '../../data/newsCardData.ts';
import bannerPng from '../../assets/images/Banners/Blog/blog-banner.png';
import bannerWebp from '../../assets/images/Banners/Blog/blog-banner.webp';
import patternPng from '../../assets/images/Banners/Blog/blog-patterns.png';
import patternWebp from '../../assets/images/Banners/Blog/blog-patterns.webp';
import styles from './Blog.module.scss';

const data = {
	bannerPng: bannerPng,
	bannerWebp: bannerWebp,
	patternPng: patternPng,
	patternWebp: patternWebp,
	title: 'recent news',
};

export const Blog = () => {
	const handleClicker = (e: any) => {
		e.preventDefault();
	};

	return (
		<>
			<SmallBanner data={data} />
			<div className={styles.blog}>
				<div className={styles.blog__container}>
					<div className={styles.blog__wrapper}>
						{newsCardData?.map((card) => (
							<NewsCard
								data={card}
								onPage={false}
								onClick={handleClicker}
								key={card.id}
							/>
						))}
					</div>
				</div>
			</div>
			<NewsForm />
		</>
	);
};
