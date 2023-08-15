import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext.js'
import styles from './HeaderCart.module.scss'
import sprite from '../../assets/images/sprite.svg'

export const HeaderCart = () => {
    const { setCloseBurger } = useCart()

    const handleHeaderCartClick = () => {
        setCloseBurger()
    }

    const { cartQuantity } = useCart()
    return (
        <div className={styles.headerCart}>
            <NavLink className= {styles.headerCart__btn } to='cart' onClick={ handleHeaderCartClick } >
                <svg className={ styles.headerCart__svg }>
                    <use className={ styles.headerCart__icon } xlinkHref={ `${ sprite }#cart` } />
                </svg>
            </NavLink>
            <p className={ styles.headerCart__title }>
                Cart (<span className={ styles.headerCart__quantity }>{cartQuantity}</span>)
            </p>
            <div className={ styles.headerCart__quantityMobile }>
                {cartQuantity}
            </div>
        </div>
    )
}