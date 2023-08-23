import { useState } from 'react';
import { axiosBasic } from '../../../axiosConfig.ts';
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx';
import styles from './NewsForm.module.scss';

export const NewsForm = () => {
	const [responceData, setResponceData] = useState<string>('');
	const [form, setForm] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			axiosBasic
				.post('/subscription', { user: form })
				.then((response) => setResponceData(response.data.message))
				.then(() => setForm(''))
				.catch((error) => {
					if (error.response.status === 403) {
						console.log(error);
						setResponceData(error.response?.data?.message);
					} else {
						console.log(error);
						setResponceData(error.response?.data[0]?.msg);
					}
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className={styles.newsForm}>
			<div className={styles.newsForm__container}>
				<div className={styles.newsForm__wrapper}>
					<form
						className={styles.newsForm__form}
						onSubmit={handleSubmit}
					>
						<div className={styles.newsForm__titleWrapper}>
							<SectionTitle
								title='Subscribe to our Newsletter'
								black={false}
								hero={false}
							/>
						</div>
						<div className={styles.newsForm__subscribe}>
							<input
								className={styles.newsForm__inputLine}
								type='email'
								name='email'
								id='email'
								value={form}
								onChange={(e) => setForm(e.target.value)}
								placeholder='Your Email Address'
								required
							/>
							<input
								className={styles.newsForm__inputSubmit}
								type='submit'
								value='Subscribe'
							/>
							<div className={styles.newsForm__alert}>
								{responceData}
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
