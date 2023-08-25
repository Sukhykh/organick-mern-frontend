import { useEffect, useState, useCallback } from 'react';
import { Product } from '../../types/product.ts';
import { useProductStore } from '../../store/productStore.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { axiosBasic } from '../../../axiosConfig.ts';
import { productData } from '../../types/product.ts';
import styles from './Products.module.scss';

export const Products = () => {
	const [curentProduct, setCurentProduct] = useState<Product | undefined>(
		undefined
	);
	const products = useProductStore((state) => state.products);
	const setProducts = useProductStore((state) => state.setProducts);
	const [responceData, setResponceData] = useState<string>('');
	const [form, setForm] = useState<productData>({
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

	useEffect(() => {
		try {
			setProducts();
		} catch (error) {
			console.error('Error fetching and setting products:', error);
		}
	}, []);

	const handleEdit = async (e: any, id: string) => {
		e.preventDefault();
		try {
			const productData = await axiosBasic.get(`/products/${id}`);
			const product: Product = productData.data;
			setForm({
				title: product?.title,
				tag: product?.tag,
				rating: product?.rating,
				price: product?.price,
				discount: product?.discount,
				description: product?.description,
				productDescription: product?.productDescription,
				additionalInfo: product?.additionalInfo,
			});
			setCurentProduct(product);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (e: any, id: string) => {
		e.preventDefault();
		try {
			const response = await axiosBasic.delete(`/products/${id}`);
			setProducts();
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		try {
			axiosBasic
				.post(`/products/${curentProduct?._id}`, formData)
				.then(() => setResponceData(''))
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
				.then(() => setCurentProduct(undefined))
				.catch((error) =>
					setResponceData(error.response?.data[0]?.msg)
				);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className={styles.products}>
			<div className={styles.products__container}>
				<div className={styles.products__wrapper}>
					<SectionTitle title='products:' black hero={false} />
					<div className={styles.products__cardWrapper}>
						{products?.map((el) => (
							<div className={styles.products__item} key={el._id}>
								<h2 className={styles.products__itemTitle}>
									{el.title}
								</h2>
								<div className={styles.products__itemBtnBar}>
									<a
										className={styles.products__itemEdit}
										href='#'
										onClick={(e) => handleEdit(e, el._id)}
									>
										edit
									</a>
									<a
										className={styles.products__itemDelete}
										href='#'
										onClick={(e) => handleDelete(e, el._id)}
									>
										delete
									</a>
								</div>
							</div>
						))}
					</div>
					{curentProduct && (
						<div className={styles.products__formWrapper}>
							<form
								className={styles.products__form}
								onSubmit={handleSubmit}
							>
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='title'
									>
										title
									</label>
									<input
										className={styles.products__inputLine}
										type='text'
										name='title'
										id='title'
										value={form.title}
										onChange={(e) =>
											handleFieldChange(
												'title',
												e.target.value
											)
										}
										required
									/>
								</div>
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='tag'
									>
										tag
									</label>
									<input
										className={styles.products__inputLine}
										type='text'
										name='tag'
										id='tag'
										value={form.tag}
										onChange={(e) =>
											handleFieldChange(
												'tag',
												e.target.value
											)
										}
										required
									/>
								</div>
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='rating'
									>
										rating
									</label>
									<input
										className={styles.products__inputLine}
										type='number'
										min={0}
										max={5}
										name='rating'
										id='rating'
										value={form.rating}
										onChange={(e) =>
											handleFieldChange(
												'rating',
												e.target.value
											)
										}
										required
									/>
								</div>
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='price'
									>
										full price
									</label>
									<input
										className={styles.products__inputLine}
										type='number'
										min={0}
										step='0.01'
										name='price'
										id='price'
										value={form.price}
										onChange={(e) =>
											handleFieldChange(
												'price',
												e.target.value
											)
										}
										required
									/>
								</div>
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='discount'
									>
										discount prise (0 if full price)
									</label>
									<input
										className={styles.products__inputLine}
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
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='description'
									>
										description
									</label>
									<textarea
										className={styles.products__inputArea}
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
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='productDescription'
									>
										Product Description
									</label>
									<textarea
										className={styles.products__inputArea}
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
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='additionalInfo'
									>
										Additional Info
									</label>
									<textarea
										className={styles.products__inputArea}
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
								<div className={styles.products__inputWrapper}>
									<label
										className={styles.products__label}
										htmlFor='image'
									>
										image
									</label>
									<input
										className={styles.products__inputFile}
										type='file'
										name='image'
										id='image'
									/>
								</div>
								<div className={styles.products__inputWrapper}>
									<input
										className={styles.products__button}
										type='submit'
										value={'Submit'}
									/>
									<div className={styles.products__alert}>
										{responceData}
									</div>
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
