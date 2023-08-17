import sprite from '../../assets/images/sprite.svg'
import styles from './ProductRating.module.scss'

type ProductRatingProps = {
    rating: number
}

export const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
    return (
        Array.from({ length: 5 }).map((el, index) => 
            (<div className={ styles.stars } key={Math.round(Math.random() * 10000000000)}>
                <svg className={ styles.stars__svg }>
                    { <use className={ index + 1 <= rating ? 
                        `${ styles.stars__icon } ${ styles.stars__icon_gold }` :
                        `${ styles.stars__icon } ${ styles.stars__icon_gray }`
                        } xlinkHref={ `${ sprite }#star` }/>}
                </svg>
            </div>
        )) 
    )
}
