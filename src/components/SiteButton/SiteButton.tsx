import { NavLink } from 'react-router-dom';

import sprite from '../../assets/images/sprite.svg'
import styles from './SiteButton.module.scss'

type SiteButtonProps = {
    title: string;
    yellow: boolean
    path: string
}

export const SiteButton: React.FC<SiteButtonProps> = ({ title, yellow, path }) => {
    return (
        <NavLink className={ yellow ? `${styles.button} ${styles.button_yellow}` : `${styles.button} ${styles.button_blue}` } to={path}>
            <span className={ styles.button__buttonText } >{title}</span>
            <span className={ styles.button__buttonItem }>
                <svg className={ styles.button__buttonSvg }>
                    <use className={ styles.bbutton__uttonIcon } xlinkHref={ `${ sprite }#buttonArrow` } />
                </svg>
            </span>
        </NavLink>  
    )
}