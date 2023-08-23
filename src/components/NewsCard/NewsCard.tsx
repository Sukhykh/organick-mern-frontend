import { SiteButton } from '../SiteButton/SiteButton';
import styles from './NewsCard.module.scss';
import sprite from '../../assets/images/sprite.svg';

type NewsCardProps = {
	data: {
		id: number;
		date: {
			day: string;
			month: string;
		};
		imgPng: string;
		imgWebp: string;
		user: string;
		title: string;
		text: string;
	};
	onPage: boolean;
	onClick: (e: any) => void;
};

export const NewsCard: React.FC<NewsCardProps> = ({
	data,
	onPage,
	onClick,
}) => {
	return (
		<div className={styles.newsCard}>
			<div className={styles.newsCard__wrapper}>
				<div className={styles.newsCard__background}>
					<picture>
						<source srcSet={data.imgWebp} type='image/webp' />
						<img
							className={styles.newsCard__img}
							src={data.imgPng}
							alt='picture'
							width={677}
							height={524}
						/>
					</picture>
				</div>
				<div className={styles.newsCard__date}>
					<p className={styles.newsCard__dateDay}>{data.date.day}</p>
					<p className={styles.newsCard__dateMonth}>
						{data.date.month}
					</p>
				</div>
				<div className={styles.newsCard__content}>
					<div className={styles.newsCard__user}>
						<span
							className={
								onPage
									? `${styles.newsCard__userItem} ${styles.newsCard__userItem_yellow}`
									: `${styles.newsCard__userItem} ${styles.newsCard__userItem_green}`
							}
						>
							<svg className={styles.newsCard__userSvg}>
								<use
									className={styles.newsCard__userIcon}
									xlinkHref={`${sprite}#user`}
								/>
							</svg>
						</span>
						<span className={styles.newsCard__userTitle}>
							By {data.user}
						</span>
					</div>
					<div className={styles.newsCard__info}>
						<h3 className={styles.newsCard__title}>{data.title}</h3>
						<p className={styles.newsCard__text}>{data.text}</p>
					</div>
					{onPage && (
						<SiteButton
							title='read more'
							color='yellow'
							path='news'
						/>
					)}
					{!onPage && (
						<a
							className={styles.newsCard__button}
							href='#'
							onClick={(e) => onClick(e)}
						>
							<span className={styles.newsCard__buttonTitle}>
								read more
							</span>
							<span className={styles.newsCard__buttonItem}>
								<svg className={styles.newsCard__buttonSvg}>
									<use
										className={styles.newsCard__buttonIcon}
										xlinkHref={`${sprite}#buttonArrow`}
									/>
								</svg>
							</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
