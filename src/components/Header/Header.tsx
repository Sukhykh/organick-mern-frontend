import { useState, useEffect } from 'react';
import { Logo } from '../Logo/Logo.tsx';
import { Navigation } from '../Navigation/Navigation.tsx';
import { Search } from '../Search/Search.tsx';
import { HeaderCart } from '../HeaderCart/HeaderCart.tsx';
import { useCart } from '../../context/CartContext.tsx';
import styles from './Header.module.scss';

export const Header = () => {
	const { isOpenBurger } = useCart();
	const [isVisible, setIsVisible] = useState(true);

	const scrollToTop = (e: any) => {
		e.preventDefault();
		window.scrollTo({ top: 0, left: 0 });
	};

	const handleScroll = () => {
		const header = document.querySelector(`.${styles.header__container}`);
		if (header) {
			const headerElement = header.getBoundingClientRect();
			setIsVisible(headerElement.bottom >= 0);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__wrapper}>
					<div className={styles.header__menuWrapper}>
						<Logo isHeader />
						<Navigation />
					</div>
					<div className={styles.header__btnWrapper}>
						<Search />
						<HeaderCart />
					</div>
					{!isOpenBurger && !isVisible && (
						<a
							href='#'
							className={styles.header__top}
							onClick={(e) => scrollToTop(e)}
						>
							top
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
