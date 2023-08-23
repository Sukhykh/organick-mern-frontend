import { SmallBanner } from '../../components/SmallBanner/SmallBanner.tsx';
import { NewsForm } from '../../components/NewsForm/NewsForm.tsx';
import { ProjectCard } from '../../components/ProjectCatd/ProjectCatd.tsx';
import { projectsData } from '../../data/projectsData.ts';
import styles from './Projects.module.scss';
import bannerPng from '../../assets/images/Banners/Projects/project-banner.png';
import bannerWebp from '../../assets/images/Banners/Projects/project-banner.webp';
import patternPng from '../../assets/images/Banners/Projects/project-pattern.png';
import patternWebp from '../../assets/images/Banners/Projects/project-pattern.webp';

const data = {
	bannerPng: bannerPng,
	bannerWebp: bannerWebp,
	patternPng: patternPng,
	patternWebp: patternWebp,
	title: 'projects',
};

export const Projects = () => {
	const handleClicker = (e: any) => {
		e.preventDefault();
	};
	return (
		<>
			<SmallBanner data={data} />
			<div className={styles.projects}>
				<div className={styles.projects__container}>
					<div className={styles.projects__wrapper}>
						{projectsData?.map((card) => (
							<ProjectCard
								data={card}
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
