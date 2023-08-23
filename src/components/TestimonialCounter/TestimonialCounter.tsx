import styles from './TestimonialCounter.module.scss';

type TestimonialCounterProps = {
	data: {
		id: number;
		title: string;
		text: string;
	};
};

export const TestimonialCounter: React.FC<TestimonialCounterProps> = ({
	data,
}) => {
	return (
		<div className={styles.testimonialCounter}>
			<p className={styles.testimonialCounter__title}>{data.title}</p>
			<p className={styles.testimonialCounter__text}>{data.text}</p>
		</div>
	);
};
