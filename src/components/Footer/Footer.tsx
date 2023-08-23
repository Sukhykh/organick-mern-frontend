import { FollowItem } from '../FollowItem/FollowItem.tsx';
import { Logo } from '../Logo/Logo.tsx';
import { getCurrentYear } from '../../utilities/getCurrentYear.ts';
import { followData } from '../../data/followData.ts';
import styles from './Footer.module.scss';

export const Footer = () => {
	const handleClick = (e: any) => {
		e.preventDefault();
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__wrapper}>
					<div className={styles.footer__contactUs}>
						<h3 className={styles.footer__title}>contact us</h3>
						<ul className={styles.footer__contactUsList}>
							<li className={styles.footer__contactUsItem}>
								<a
									className={styles.footer__contactUsLink}
									href='mailto:needhelp@Organia.com?subject=Contacts'
								>
									<span
										className={
											styles.footer__contactUsTitle
										}
									>
										email
									</span>
									<span
										className={styles.footer__contactUsText}
									>
										needhelp@Organia.com
									</span>
								</a>
							</li>
							<li className={styles.footer__contactUsItem}>
								<a
									className={styles.footer__contactUsLink}
									href='tel:666888888'
								>
									<span
										className={
											styles.footer__contactUsTitle
										}
									>
										phone
									</span>
									<span
										className={styles.footer__contactUsText}
									>
										666 888 888
									</span>
								</a>
							</li>
							<li className={styles.footer__contactUsItem}>
								<a
									className={styles.footer__contactUsLink}
									href='https://www.google.com/maps/place/88+Brooklyn+Ave,+Brooklyn,+NY+11216,+USA/@40.6767083,-73.9476701,16z/data=!4m6!3m5!1s0x89c25b84595d61fd:0xc00ede9005b9a8a5!8m2!3d40.677099!4d-73.9444709!16s%2Fg%2F11csdw1nfp?entry=ttu'
									target='_blank'
									rel='noindex, nofollow, noreferrer, noopener'
								>
									<span
										className={
											styles.footer__contactUsTitle
										}
									>
										address
									</span>
									<span
										className={styles.footer__contactUsText}
									>
										88 road, Borklyn street, USA
									</span>
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.footer__mainInfo}>
						<Logo isHeader={false} />
						<p className={styles.footer__mainInfoText}>
							Simply dummy text of the printing and typesetting
							industry. Lorem Ipsum simply dummy text of the
							printing
						</p>
						<div className={styles.footer__followBar}>
							{followData?.map((el) => (
								<FollowItem data={el} key={el.id} />
							))}
						</div>
					</div>
					<div className={styles.footer__utility}>
						<h3 className={styles.footer__title}>utility pages</h3>
						<ul
							className={styles.footer__utilityList}
							onClick={(e) => handleClick(e)}
						>
							<li className={styles.footer__utilityItem}>
								<a
									className={styles.footer__utilityLink}
									href='#'
								>
									Style Guide
								</a>
							</li>
							<li className={styles.footer__utilityItem}>
								<a
									className={styles.footer__utilityLink}
									href='#'
								>
									404 Not Found
								</a>
							</li>
							<li className={styles.footer__utilityItem}>
								<a
									className={styles.footer__utilityLink}
									href='#'
								>
									Password Protected
								</a>
							</li>
							<li className={styles.footer__utilityItem}>
								<a
									className={styles.footer__utilityLink}
									href='#'
								>
									Licences
								</a>
							</li>
							<li className={styles.footer__utilityItem}>
								<a
									className={styles.footer__utilityLink}
									href='#'
								>
									Changelog
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.footer__copyright}>
				<span className={styles.footer__copyrightText}>
					Copyright &copy;
				</span>
				<span className={styles.footer__copyrightTitle}>Organick</span>
				<span className={styles.footer__copyrightText}>
					{getCurrentYear()}
				</span>
			</div>
		</footer>
	);
};