import { useState } from 'react';
import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { TestimonialCard } from '../TestimonialCard/TestimonialCard.tsx';
import { TestimonialCounter } from '../TestimonialCounter/TestimonialCounter.tsx';
import { testimonialData } from '../../data/testimonialData.ts';
import { countersData } from '../../data/countersData.ts';
import styles from './Testimonial.module.scss';
import leftPng from '../../assets/images/Testimonial/testimonial-left.png';
import leftWebp from '../../assets/images/Testimonial/testimonial-left.webp';
import rightPng from '../../assets/images/Testimonial/testimonial-right.png';
import rightWebp from '../../assets/images/Testimonial/testimonial-right.webp';

export const Testimonial = () => {
	const [isActiv, setIsActiv] = useState<string>('Sara Taylor');

	const setActivFrame = (str: string) => {
		setIsActiv(str);
	};

	return (
		<section className={styles.testimonial}>
			<div className={styles.testimonial__background}>
				<div className={styles.testimonial__leftWrapper}>
					<picture>
						<source srcSet={leftWebp} type='image/webp' />
						<img
							className={styles.testimonial__leftImg}
							src={leftPng}
							alt='backgroung-left'
							width={484}
							height={1267}
						/>
					</picture>
				</div>
				<div className={styles.testimonial__rightWrapper}>
					<picture>
						<source srcSet={rightWebp} type='image/webp' />
						<img
							className={styles.testimonial__rightImg}
							src={rightPng}
							alt='backgroung-left'
							width={432}
							height={1267}
						/>
					</picture>
				</div>
			</div>
			<div className={styles.testimonial__container}>
				<div className={styles.testimonial__wrapper}>
					<Subtitle title='testimonial' green />
					<div className={styles.testimonial__titleWrapper}>
						<SectionTitle
							title='what our customer saying?'
							black
							hero={false}
						/>
					</div>
					<div className={styles.testimonial__content}>
						{testimonialData &&
							testimonialData.map(
								(card) =>
									card.title === isActiv && (
										<TestimonialCard
											data={card}
											key={card.id}
										/>
									)
							)}
						<div className={styles.testimonial__dotController}>
							{testimonialData &&
								testimonialData.map((card) => (
									<div
										className={
											card.title === isActiv
												? `${styles.testimonial__dots} ${styles.testimonial__dots_activ}`
												: styles.testimonial__dots
										}
										onClick={() =>
											setActivFrame(card.title)
										}
										key={card.title}
									></div>
								))}
						</div>
					</div>
					<div className={styles.testimonial__divider}></div>
					<div className={styles.testimonial__counterWrapper}>
						{countersData &&
							countersData.map((el) => (
								<TestimonialCounter data={el} key={el.id} />
							))}
					</div>
				</div>
			</div>
		</section>
	);
};
