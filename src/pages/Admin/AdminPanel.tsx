import { useCallback, useState } from 'react';
import { axiosBasic } from '../../../axiosConfig.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import { productData } from '../../types/product.ts';
import styles from './AdminPanel.module.scss';

export const AdminPanel = () => {
	const [responceData, setResponceData] = useState<string>('');
	const [form, setForm] = useLocalStorage<productData>('productData', {
		title: '',
		tag: '',
		rating: 4,
		price: 0,
		discount: 0,
		description: '',
		productDescription: '',
		additionalInfo: '',
	});

	const handleFieldChange = useCallback(
		(fieldName: string, value: string) => {
			setForm((prevState) => ({ ...prevState, [fieldName]: value }));
		},
		[]
	);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		try {
			axiosBasic
				.post('/products', formData)
				.then((response) => setResponceData(response.data.message))
				.then(() =>
					setForm({
						title: '',
						tag: '',
						rating: 4,
						price: 0,
						discount: 0,
						description: '',
						productDescription: '',
						additionalInfo: '',
					})
				)
				.catch((error) =>
					setResponceData(error.response?.data[0]?.msg)
				);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className={styles.addProducts}>
			<div className={styles.addProducts__container}>
				<div className={styles.addProducts__wrapper}>
					<SectionTitle
						title='Add products'
						black={true}
						hero={false}
					/>
					<form
						className={styles.addProducts__form}
						onSubmit={handleSubmit}
					>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='title'
							>
								title
							</label>
							<input
								className={styles.addProducts__inputLine}
								type='text'
								name='title'
								id='title'
								value={form.title}
								onChange={(e) =>
									handleFieldChange('title', e.target.value)
								}
								required
							/>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='tag'
							>
								tag
							</label>
							<input
								className={styles.addProducts__inputLine}
								type='text'
								name='tag'
								id='tag'
								value={form.tag}
								onChange={(e) =>
									handleFieldChange('tag', e.target.value)
								}
								required
							/>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='rating'
							>
								rating
							</label>
							<input
								className={styles.addProducts__inputLine}
								type='number'
								min={0}
								max={5}
								name='rating'
								id='rating'
								value={form.rating}
								onChange={(e) =>
									handleFieldChange('rating', e.target.value)
								}
								required
							/>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='price'
							>
								full price
							</label>
							<input
								className={styles.addProducts__inputLine}
								type='number'
								min={0}
								step='0.01'
								name='price'
								id='price'
								value={form.price}
								onChange={(e) =>
									handleFieldChange('price', e.target.value)
								}
								required
							/>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='discount'
							>
								discount prise (0 if full price)
							</label>
							<input
								className={styles.addProducts__inputLine}
								type='number'
								min={0}
								step='0.01'
								name='discount'
								id='discount'
								value={form.discount}
								onChange={(e) =>
									handleFieldChange(
										'discount',
										e.target.value
									)
								}
								required
							/>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='description'
							>
								description
							</label>
							<textarea
								className={styles.addProducts__inputArea}
								name='description'
								id='description'
								rows={5}
								value={form.description}
								onChange={(e) =>
									handleFieldChange(
										'description',
										e.target.value
									)
								}
								required
							></textarea>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='productDescription'
							>
								Product Description
							</label>
							<textarea
								className={styles.addProducts__inputArea}
								name='productDescription'
								id='productDescription'
								rows={5}
								value={form.productDescription}
								onChange={(e) =>
									handleFieldChange(
										'productDescription',
										e.target.value
									)
								}
								required
							></textarea>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='additionalInfo'
							>
								Additional Info
							</label>
							<textarea
								className={styles.addProducts__inputArea}
								name='additionalInfo'
								id='additionalInfo'
								rows={5}
								value={form.additionalInfo}
								onChange={(e) =>
									handleFieldChange(
										'additionalInfo',
										e.target.value
									)
								}
								required
							></textarea>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<label
								className={styles.addProducts__label}
								htmlFor='image'
							>
								image
							</label>
							<input
								className={styles.addProducts__inputFile}
								type='file'
								name='image'
								id='image'
								required
							/>
						</div>
						<div className={styles.addProducts__inputWrapper}>
							<input
								className={styles.addProducts__button}
								type='submit'
								value={'Submit'}
							/>
							<div className={styles.addProducts__alert}>
								{responceData}
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
