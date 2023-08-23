import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import { SiteButton } from '../SiteButton/SiteButton.tsx';
import { Subtitle } from '../Subtitle/Subtitle.tsx';
import { WhatWeGrowCard } from '../WhatWeGrowCard/WhatWeGrowCard.tsx';
import { whatWeGrowData } from '../../data/whatWeGrowData.ts';
import { useWidthValue } from '../../hooks/useWidthValue.ts';
import picturePng from '../../assets/images/Services/services-main.png';
import pictureWebp from '../../assets/images/Services/services-main.webp';

import styles from './WhatWeGrow.module.scss';

export const WhatWeGrow = () => {
	return (
		<section className={styles.whatWeGrow}>
			<div className={styles.whatWeGrow__container}>
				<div className={styles.whatWeGrow__wrapper}>
					<Subtitle title='What we Grow' green />
					<div className={styles.whatWeGrow__titleWrapper}>
						<SectionTitle
							title='Better Agriculture for Better Future'
							black
							hero={false}
						/>
					</div>
					<div className={styles.whatWeGrow__content}>
						<div className={styles.whatWeGrow__imgWrapper}>
							<picture>
								<source srcSet={picturePng} type='image/webp' />
								<img
									className={styles.whatWeGrow__img}
									src={pictureWebp}
									alt='WhatWeGrow-picture'
									width={435}
									height={580}
								/>
							</picture>
						</div>
						{useWidthValue() > 550 && (
							<div className={styles.whatWeGrow__cardsWrapper}>
								<div className={styles.whatWeGrow__cardsLeft}>
									{whatWeGrowData?.map((card) => {
										if (card.id % 2 !== 0)
											return (
												<WhatWeGrowCard
													data={card}
													key={card.id}
												/>
											);
									})}
								</div>
								<div className={styles.whatWeGrow__cardsRight}>
									{whatWeGrowData?.map((card) => {
										if (card.id % 2 === 0)
											return (
												<WhatWeGrowCard
													data={card}
													key={card.id}
												/>
											);
									})}
								</div>
							</div>
						)}
						{useWidthValue() <= 550 && (
							<div className={styles.whatWeGrow__cardsWrapper}>
								{whatWeGrowData?.map((card) => (
									<WhatWeGrowCard data={card} key={card.id} />
								))}
							</div>
						)}
					</div>
					<SiteButton
						title='explore more'
						color='white'
						path='/pages/quality'
					/>
				</div>
			</div>
		</section>
	);
};
