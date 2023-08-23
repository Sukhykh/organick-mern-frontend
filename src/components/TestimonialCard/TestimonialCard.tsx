import { Rating } from '../Rating/Rating.tsx';
import styles from './TestimonialCard.module.scss';

type TestimonialCardProps = {
	data: {
		id: number;
		picture: string;
		rating: number;
		text: string;
		title: string;
		role: string;
	};
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
	return (
		<div className={styles.testimonialCard}>
			<div className={styles.testimonialCard__imgWrapper}>
				<img
					className={styles.testimonialCard__img}
					src={data.picture}
					alt='photo'
					width={115}
					height={115}
				/>
			</div>
			<div className={styles.testimonialCard__ratingWrapper}>
				<Rating rating={data.rating} big={true} />
			</div>
			<p className={styles.testimonialCard__text}>{data.text}</p>
			<p className={styles.testimonialCard__title}>{data.title}</p>
			<p className={styles.testimonialCard__role}>{data.role}</p>
		</div>
	);
};
