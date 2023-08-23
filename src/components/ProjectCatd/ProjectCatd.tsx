import { useState } from 'react';
import styles from './ProjectCatd.module.scss';
import sprite from '../../assets/images/sprite.svg';

type ProjectCardProps = {
	data: {
		id: number;
		picture: {
			png: string;
			webp: string;
		};
		title: string;
		subtitle: string;
	};
	onClick: (e: any) => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ data, onClick }) => {
	const [flag, setFlag] = useState<boolean>(false);

	const hanhleClick = (e: any) => {
		e.preventDefault();
		if (e?.target?.closest('a')?.id === `${data.id}`) return;
		setFlag(!flag);
	};

	return (
		<div className={styles.projectCard}>
			<div
				className={styles.projectCard__picture}
				onClick={(e) => hanhleClick(e)}
			>
				<div className={styles.projectCard__imgWrapper}>
					<picture>
						<source srcSet={data.picture.webp} type='image/webp' />
						<img
							className={styles.projectCard__img}
							src={data.picture.png}
							alt='picture'
							width={451}
							height={421}
						/>
					</picture>
				</div>
				{flag && (
					<div className={styles.projectCard__imgOwerlay}>
						<a
							className={styles.projectCard__button}
							href='#'
							onClick={(e) => onClick(e)}
							id={`${data.id}`}
						>
							<svg className={styles.projectCard__svg}>
								<use
									className={styles.projectCard__icon}
									xlinkHref={`${sprite}#navigationArrow`}
								/>
							</svg>
						</a>
					</div>
				)}
			</div>
			<div className={styles.projectCard__titleBar}>
				<h3 className={styles.projectCard__title}>{data.title}</h3>
				<p className={styles.projectCard__subtitle}>{data.subtitle}</p>
			</div>
		</div>
	);
};
