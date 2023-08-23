import styles from './Logo.module.scss';
import logo from '../../assets/images/logo.png';

type LogoProps = {
	isHeader: boolean;
};

export const Logo: React.FC<LogoProps> = ({ isHeader }) => {
	return (
		<a className={styles.logo} href='#'>
			<div className={styles.logo__imgWrapper}>
				<img
					className={styles.logo__img}
					src={logo}
					alt='logo'
					width={36}
					height={53}
				/>
			</div>
			<div
				className={
					isHeader
						? `${styles.logo__textWrapper} ${styles.logo__textWrapper_header}`
						: styles.logo__textWrapper
				}
			>
				<p className={styles.logo__text}>Organick</p>
			</div>
		</a>
	);
};