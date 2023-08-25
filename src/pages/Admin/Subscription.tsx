import { useState, useEffect } from 'react';
import { axiosBasic } from '../../../axiosConfig.ts';
import { Subscr } from '../../types/subscr.ts';
import styles from './Subscription.module.scss';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const Subscription = () => {
	const [subscription, setSubscription] = useState<Array<Subscr>>([]);

	const getAllSubscription = async () => {
		try {
			const subscriptionArr = await axiosBasic.get('/subscription');
			setSubscription(subscriptionArr.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllSubscription();
	}, []);

	return (
		<section className={styles.subscription}>
			<div className={styles.subscription__container}>
				<div className={styles.subscription__wrapper}>
					{!subscription.length && (
						<SectionTitle
							title='No subscribers yet!'
							black
							hero={false}
						/>
					)}
					{subscription.length !==0 && (
						<>
							<SectionTitle
								title='subscribers:'
								hero={false}
								black
							/>
							{subscription?.map((el) => (
								<p
									className={styles.subscription__item}
									key={el._id}
								>
									{el.user}
								</p>
							))}
						</>
					)}
				</div>
			</div>
		</section>
	);
};
