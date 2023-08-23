import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext.tsx';
import styles from './MobileMenu.module.scss';
import sprite from '../../assets/images/sprite.svg';

export const MobileMenu = () => {
	const { setCloseBurger } = useCart();
	const [subNavIsOpen, setSubNavIsOpen] = useState<boolean>(false);

	const handleSubNavigationClick = () => {
		setSubNavIsOpen(!subNavIsOpen);
	};

	const handleClick = (e: any) => {
		if (e.target.nodeName !== 'UL' && e.target.nodeName !== 'P') {
			return setCloseBurger();
		}
	};

	return (
		<nav className={styles.navigation} onClick={(e) => handleClick(e)}>
			<ul className={styles.navigation__list}>
				<li className={styles.navigation__item}>
					<NavLink className={styles.navigation__link} to='/' end>
						home
					</NavLink>
				</li>
				<li className={styles.navigation__item}>
					<NavLink className={styles.navigation__link} to='about'>
						about
					</NavLink>
				</li>
				<li className={styles.navigation__item}>
					<button
						className={styles.navigation__sublist}
						onClick={handleSubNavigationClick}
					>
						<div className={styles.navigation__sublistBar}>
							<p className={styles.navigation__sublistTitle}>
								pages
							</p>
							<div className={styles.navigation__sublistInner}>
								<svg className={styles.navigation__sublistSvg}>
									<use
										className={
											styles.navigation__sublistIcon
										}
										xlinkHref={`${sprite}#navigationArrow`}
									></use>
								</svg>
							</div>
						</div>
					</button>
					<ul
						className={
							subNavIsOpen
								? `${styles.navigation__sublistNav} ${styles.navigation__sublistNav_opened}`
								: styles.navigation__sublistNav
						}
					>
						<li className={styles.navigation__item}>
							<NavLink
								className={styles.navigation__link}
								to='pages/service'
							>
								service
							</NavLink>
						</li>
						<li className={styles.navigation__item}>
							<NavLink
								className={styles.navigation__link}
								to='pages/quality'
							>
								quality
							</NavLink>
						</li>
					</ul>
				</li>
				<li className={styles.navigation__item}>
					<NavLink className={styles.navigation__link} to='shop'>
						shop
					</NavLink>
				</li>
				<li className={styles.navigation__item}>
					<NavLink className={styles.navigation__link} to='projects'>
						projects
					</NavLink>
				</li>
				<li className={styles.navigation__item}>
					<NavLink className={styles.navigation__link} to='news'>
						news
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};