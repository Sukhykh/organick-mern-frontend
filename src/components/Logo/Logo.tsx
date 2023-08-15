import styles from './Logo.module.scss';
import logo from '../../assets/images/logo.png'

export const Logo = () => {
    return (
        <a className={ styles.logo } href='#'>
            <div className={ styles.logo__imgWrapper }>
                <img className={ styles.logo__img } src={ logo } alt="logo" width={ 36 } height={ 53 }/>
            </div>
            <div className={ `${ styles.logo__textWrapper } ${ styles.logo__textWrapper_header }` }>
                <p className={ styles.logo__text }>
                    Organick
                </p>
            </div>
        </a>
    )
}