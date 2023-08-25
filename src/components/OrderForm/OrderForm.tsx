import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosBasic } from '../../../axiosConfig.ts';
import { useCart } from '../../context/CartContext.tsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import sprite from '../../assets/images/sprite.svg';
import styles from './OrderForm.module.scss';

type usersData = {
	fullName: string;
	email: string;
	address: string;
	phoneNumber: string;
	message: string;
};

export const OrderForm = () => {
	const [responceData, setResponceData] = useState<string>('');

	const [form, setForm] = useLocalStorage<usersData>('userData', {
		fullName: '',
		email: '',
		address: '',
		phoneNumber: '',
		message: '',
	});

	const { cartItems, clenCart } = useCart();

	const products = cartItems.map((el) => {
		return { productId: el.product._id, quantity: el.quantity };
	});

	const [isOrder, setIsOrder] = useState<boolean>(false);

	const navigate = useNavigate();

	const handleFieldChange = useCallback(
		(fieldName: string, value: string) => {
			setForm((prevState) => ({ ...prevState, [fieldName]: value }));
		},
		[]
	);

	const handleOrder = (e: any) => {
		e.preventDefault();
		if (!cartItems.length) return;
		setIsOrder(true);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const orderData = {
			products: products,
			user: {
				fullName: form.fullName,
				email: form.email,
				address: form.address,
				phoneNumber: form.phoneNumber,
				message: form.message,
			},
		};
		try {
			axiosBasic
				.post('/orders', { data: orderData })
				.then(() =>
					setForm({
						fullName: '',
						email: '',
						address: '',
						phoneNumber: '',
						message: '',
					})
				)
				.then(() => clenCart())
				.then(() => setIsOrder(false))
				.then(() => {
					window.scrollTo({ top: 0, left: 0 })
					navigate('thanks')})
				.catch((error) =>
					setResponceData(error.response?.data[0]?.msg)
				);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className={styles.orderForm}>
			<div className={styles.orderForm__container}>
				<div className={styles.orderForm__wrapper}>
					{isOrder && cartItems.length ? (
						<form
							className={styles.orderForm__form}
							onSubmit={handleSubmit}
						>
							<div className={styles.orderForm__formInner}>
								<div className={styles.orderForm__inputWrapper}>
									<label
										className={styles.orderForm__label}
										htmlFor='fullName'
									>
										full name*
									</label>
									<input
										className={styles.orderForm__inputLine}
										type='text'
										name='fullName'
										id='fullName'
										value={form.fullName}
										onChange={(e) =>
											handleFieldChange(
												'fullName',
												e.target.value
											)
										}
										placeholder='Your full Name'
										required
									/>
								</div>
								<div className={styles.orderForm__inputWrapper}>
									<label
										className={styles.orderForm__label}
										htmlFor='email'
									>
										Your Email*
									</label>
									<input
										className={styles.orderForm__inputLine}
										type='email'
										name='email'
										id='email'
										value={form.email}
										onChange={(e) =>
											handleFieldChange(
												'email',
												e.target.value
											)
										}
										placeholder='Your Email Address'
										required
									/>
								</div>
							</div>
							<div className={styles.orderForm__formInner}>
								<div className={styles.orderForm__inputWrapper}>
									<label
										className={styles.orderForm__label}
										htmlFor='address'
									>
										Address*
									</label>
									<input
										className={styles.orderForm__inputLine}
										type='text'
										name='address'
										id='address'
										value={form.address}
										onChange={(e) =>
											handleFieldChange(
												'address',
												e.target.value
											)
										}
										placeholder='your company  address'
										required
									/>
								</div>
								<div className={styles.orderForm__inputWrapper}>
									<label
										className={styles.orderForm__label}
										htmlFor='phoneNumber'
									>
										Phone number*
									</label>
									<input
										className={styles.orderForm__inputLine}
										type='text'
										name='phoneNumber'
										id='phoneNumber'
										value={form.phoneNumber}
										onChange={(e) =>
											handleFieldChange(
												'phoneNumber',
												e.target.value
											)
										}
										placeholder='Enter your phone'
										required
									/>
								</div>
							</div>
							<div className={styles.orderForm__inputWrapperArea}>
								<label
									className={styles.orderForm__label}
									htmlFor='message'
								>
									Message
								</label>
								<textarea
									className={styles.orderForm__inputArea}
									name='message'
									id='message'
									rows={5}
									value={form.message}
									onChange={(e) =>
										handleFieldChange(
											'message',
											e.target.value
										)
									}
									placeholder='some extra information'
								></textarea>
							</div>
							<input
								className={styles.orderForm__inputSubmit}
								type='submit'
								value='Confirm'
							/>
						</form>
					) : (
						<a
							className={
								cartItems.length
									? `${styles.orderForm__buttton} ${styles.orderForm__buttton_activ}`
									: styles.orderForm__buttton
							}
							href='#'
							onClick={(e) => handleOrder(e)}
						>
							<span className={styles.orderForm__buttonText}>
								to order
							</span>
							<span className={styles.orderForm__buttonItem}>
								<svg className={styles.orderForm__buttonSvg}>
									<use
										className={styles.orderForm__buttonIcon}
										xlinkHref={`${sprite}#buttonArrow`}
									/>
								</svg>
							</span>
						</a>
					)}
					<div className={styles.orderForm__alert}>
						{responceData}
					</div>
				</div>
			</div>
		</section>
	);
};
