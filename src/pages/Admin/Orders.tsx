import { useState, useEffect } from 'react';
import { axiosBasic } from '../../../axiosConfig.ts';
import { Order } from '../../types/order.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import styles from './Orders.module.scss';

export const Orders = () => {
	const [orders, setOrders] = useState<Array<Order>>([]);

	const getAllOrders = async () => {
		try {
			const ordersArr = await axiosBasic.get('/orders');
			setOrders(ordersArr.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllOrders();
	}, []);

	return (
		<section className={styles.orders}>
			<div className={styles.orders__container}>
				<div className={styles.orders__wrapper}>
					{!orders.length && (
						<SectionTitle
							title='No orders yet!'
							black
							hero={false}
						/>
					)}
					{orders.length !==0 && (
						<>
							<SectionTitle title='orders:' black hero={false} />
							{orders.map((order) => (
								<div
									className={styles.orders__item}
									key={order._id}
								>
									<div
										className={styles.orders__titleWrapper}
									>
										<p className={styles.orders__title}>
											Order number:
										</p>
										<p className={styles.orders__title}>
											{order._id}
										</p>
									</div>
									<div className={styles.orders__userWrapper}>
										<p className={styles.orders__user}>
											User: {order?.user?.fullName}
										</p>
										<p className={styles.orders__user}>
											Email: {order?.user?.email}
										</p>
										<p className={styles.orders__user}>
											Phone: {order?.user?.phoneNumber}
										</p>
									</div>
									<div
										className={
											styles.orders__productWrapper
										}
									>
										<p className={styles.orders__product}>
											Ordered products:
										</p>
										{order?.products?.map((item) => (
											<div
												className={
													styles.orders__productInner
												}
												key={item._id}
											>
												<span
													className={
														styles.orders__productTitle
													}
												>
													{item.productId.title}:
												</span>
												<span
													className={
														styles.orders__productQuantity
													}
												>
													{item.quantity}
												</span>
											</div>
										))}
									</div>
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</section>
	);
};
