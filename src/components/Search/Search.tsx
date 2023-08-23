import { useState } from 'react';
import { useCart } from '../../context/CartContext.tsx';
import { useWidthValue } from '../../hooks/useWidthValue.ts';
import styles from './Search.module.scss';
import sprite from '../../assets/images/sprite.svg';

export const Search = () => {
	const { setCloseBurger } = useCart();
	const [sender, setSender] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');

	const widthValue = useWidthValue();

	const handleInputChange = (e: any) => {
		if (!sender) setSender(true);
		setInputValue(e.target.value);
	};

	const handleSearchClick = (e: any) => {
		e.preventDefault();
		setCloseBurger();
		if (!inputValue) {
			return sender ? setSender(false) : setSender(true);
		}
		console.log(inputValue);
		setInputValue('');
	};

	return (
		<div
			className={
				widthValue <= 1600 && sender
					? `${styles.search} ${styles.search_mobile}`
					: styles.search
			}
		>
			<input
				className={
					widthValue <= 1600 && sender
						? `${styles.search__input} ${styles.search__input_mobile}`
						: styles.search__input
				}
				type='text'
				placeholder='search...'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<button
				className={styles.search__btn}
				onClick={(e) => handleSearchClick(e)}
			>
				<svg className={styles.search__svg}>
					<use
						className={styles.search__icon}
						xlinkHref={`${sprite}#search`}
					/>
				</svg>
			</button>
		</div>
	);
};
