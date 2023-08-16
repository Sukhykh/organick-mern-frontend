import { Product } from "../../types/product.ts";
const baseUrl = import.meta.env.VITE_SERVER
import sprite from '../../assets/images/sprite.svg'
import styles from './ProductCard.module.scss'

type ProductCardProps = {
    product: Product;
    onClick: (el:Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    const priceCurent = product.discount === 0 ? product.price.toFixed(2) : product.discount.toFixed(2);

    return (
        <div className={ styles.productCard } onClick={() => onClick(product)}>
            <div className={ styles.productCard__wrapper }>
                <div className={ styles.productCard__tag }>{ product.tag }</div>
                <div className={ styles.productCard__imgWrapper }>
                    <img 
                        className={ styles.productCard__img } 
                        src={`${baseUrl}${product.image}`}
                        alt={product.title} 
                        width={ 335 }
                        height={ 324 }
                    />
                </div>
                <div className={ styles.productCard__title }>{ product.title }</div>
                <div className={ styles.productCard__priceBar }>
                    <div className={ styles.productCard__price }>
                        {product.discount !== 0 && <span className={ styles.productCard__priceOld }>&#36;{ product.price.toFixed(2) }</span>}
                        <span className={ styles.productCard__priceCurent }>&#36;{ priceCurent }</span>
                    </div>
                    <div className={ styles.productCard__rating }>
                        {product.rating && Array.from({ length: 5 }).map((el, index) => 
                            (<div className={ styles.productCard__star } key={Math.round(Math.random() * 10000000000)}>
                                <svg className={ styles.productCard__starSvg }>
                                    { <use className={ index + 1 <= product.rating ? 
                                        `${ styles.productCard__starIcon } ${ styles.productCard__starIcon_gold }` :
                                        `${ styles.productCard__starIcon } ${ styles.productCard__starIcon_gray }`
                                        } xlinkHref={ `${ sprite }#star` }/>}
                                </svg>
                            </div>) 
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}