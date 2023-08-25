import sprite from '../../assets/images/sprite.svg'
import styles from './TeamCard.module.scss'

type TeamCardProps = {
    data:{
        id: number;
        picture: {
            png: string;
            webp: string;
        };
        name: string;
        position: string;
        links: {
            title: string;
            path: string;
        }[];
    }
}

export const TeamCard: React.FC<TeamCardProps> = ({ data }) => {
    return (
        <div className={ styles.teamCard }>
            <div className={ styles.teamCard__imgWrapper }>
                <picture>
                    <source srcSet={ data.picture.webp} type='image/webp'/>
                    <img className={ styles.teamCard__img } src={ data.picture.png} alt={data.name} width={449} height={485} />
                </picture>
            </div>
            <div className={ styles.teamCard__infoWrapper }>
                <div className={ styles.teamCard__personWrapper }>
                    <h4 className={ styles.teamCard__title }>{ data.name}</h4>
                    <p className={ styles.teamCard__role }>{data.position}</p>
                </div>
                <div className={ styles.teamCard__linksBar }>
                    {data?.links?.map((el, index) => (
                        <a
                            className={`${styles.teamCard__item} ${styles[`teamCard__item_${el.title}`]}`}
                            href={el.path}
                            target='_blank'
                            rel='noindex, nofollow, noreferrer, noopener'
                            key={data.name + index}
                        >
                            <svg className={styles.teamCard__svg}>
                                <use
                                    className={styles.teamCard__icon}
                                    xlinkHref={sprite + '#' + el.title}
                                ></use>
                            </svg>
                        </a> 
                    ))}
                </div>
            </div>
        </div>
    )
}