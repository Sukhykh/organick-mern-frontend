import { useState, useEffect } from 'react';

const getWidthValue = () => window.innerWidth;

export const useWidthValue = () => {
	let [widthValue, setWidthValue] = useState<number>(getWidthValue());

	useEffect(() => {
		const resizeListener = () => {
			setWidthValue(getWidthValue());
		};
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, []);

	return  widthValue
}
