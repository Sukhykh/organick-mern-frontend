import sprite from '../../assets/images/sprite.svg';
import styles from './FollowItem.module.scss';

type FollowItemProps = {
	data: {
		id: number;
		title: string;
		path: string;
	};
};

export const FollowItem: React.FC<FollowItemProps> = ({ data }) => {
	const { title, path } = data;
	return (
		<a
			className={`${styles.followItem} ${styles[`followItem_${title}`]}`}
			href={path}
			target='_blank'
			rel='noindex, nofollow, noreferrer, noopener'
		>
			<svg className={styles.followItem__svg}>
				<use
					className={styles.followItem__icon}
					xlinkHref={sprite + '#' + title}
				></use>
			</svg>
		</a>
	);
};