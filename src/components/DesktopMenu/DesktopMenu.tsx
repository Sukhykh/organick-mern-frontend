import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DesktopMenu.module.scss';
import sprite from '../../assets/images/sprite.svg';

export const DesktopMenu = () => {
	const [subNavIsOpen, setSubNavIsOpen] = useState<boolean>(false);

	const handleClick = (e: any) => {
		e.preventDefault();
		setSubNavIsOpen(!subNavIsOpen);
	};

	return (
		<nav className={styles.navigation}>
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
						onClick={(e) => handleClick(e)}
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
					</button>
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