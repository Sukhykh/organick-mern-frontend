import { NavLink } from 'react-router-dom';
import sprite from '../../assets/images/sprite.svg';
import styles from './SiteButton.module.scss';

type SiteButtonProps = {
	title: string;
	color: string;
	path: string;
};

export const SiteButton: React.FC<SiteButtonProps> = ({
	title,
	color,
	path,
}) => {
	
	const handleClick = () => {
		window.scrollTo({ top: 0, left: 0 });
	};

	return (
		<NavLink
			className={`${styles.button} ${styles[`button_${color}`]}`}
			to={path} onClick={handleClick}
		>
			<span className={styles.button__buttonText}>{title}</span>
			<span className={styles.button__buttonItem}>
				<svg className={styles.button__buttonSvg}>
					<use
						className={styles.button__buttonIcon}
						xlinkHref={`${sprite}#buttonArrow`}
					/>
				</svg>
			</span>
		</NavLink>
	);
};
