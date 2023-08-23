import styles from './Subtitle.module.scss';

type SubtitleProps = {
	title: string;
	green: boolean;
};

export const Subtitle: React.FC<SubtitleProps> = ({ title, green }) => {
	return (
		<p
			className={
				green
					? `${styles.subtitle} ${styles.subtitle_green}`
					: `${styles.subtitle} ${styles.subtitle_white}`
			}
		>
			{title}
		</p>
	);
};
