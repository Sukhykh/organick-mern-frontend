import { useWidthValue } from '../../hooks/useWidthValue.ts';
import { useCart } from '../../context/CartContext.tsx';
import { DesktopMenu } from '../DesktopMenu/DesktopMenu.tsx';
import { MobileMenu } from '../MobileMenu/MobileMenu.tsx';
import styles from './Navigation.module.scss';

export const Navigation = () => {
	const { setOpenBurger, setCloseBurger, isOpenBurger } = useCart();

	const widthValue = useWidthValue();
	if (widthValue > 1100 && isOpenBurger) {
		setCloseBurger();
	}

	const handleBurger = (e: any) => {
		e.preventDefault();
		isOpenBurger ? setCloseBurger() : setOpenBurger();
	};

	return (
		<div className={styles.headerMenu}>
			{widthValue > 1100 && <DesktopMenu />}
			{widthValue <= 1100 && isOpenBurger && <MobileMenu />}
			<div
				className={
					isOpenBurger
						? `${styles.headerMenu__burger} ${styles.headerMenu__burger_opened}`
						: styles.headerMenu__burger
				}
			>
				<a
					className={styles.headerMenu__burgerInner}
					href='#'
					onClick={(e) => handleBurger(e)}
				>
					<div
						className={`${styles.headerMenu__burgerIcon} ${styles.headerMenu__burgerIcon_top}`}
					></div>
					<div
						className={`${styles.headerMenu__burgerIcon} ${styles.headerMenu__burgerIcon_center}`}
					></div>
					<div
						className={`${styles.headerMenu__burgerIcon} ${styles.headerMenu__burgerIcon_bottom}`}
					></div>
				</a>
			</div>
		</div>
	);
};