import { SiteButton } from '../../components/SiteButton/SiteButton.tsx';
import styles from './AdminNavigation.module.scss';

export const AdminNavigation = () => {
	return (
		<div className={styles.adminNavigation}>
			<div className={styles.adminNavigation__container}>
				<div className={styles.adminNavigation__wrapper}>
					<SiteButton
						title='products'
						color='blue'
						path='allProducts'
					/>
					<SiteButton
						title='add product'
						color='yellow'
						path='addProduct'
					/>
					<SiteButton
						title='orders'
						color='white'
						path='orders'
					/>
					
					<SiteButton
						title='subscribers'
						color='white'
						path='subscription'
					/>
				</div>
			</div>
		</div>
	);
};
