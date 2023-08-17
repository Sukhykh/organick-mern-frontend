import { SiteButton } from "../../components/SiteButton/SiteButton.tsx"
import styles from './AdminNavigation.module.scss'

export const AdminNavigation = () => {
    return (
        <div className={ styles.adminNavigation }>
            <div className={ styles.adminNavigation__container }>
                <div className={ styles.adminNavigation__wrapper }>
                    <SiteButton title="to orders" yellow={true} path="orders"/>
                    <SiteButton title="add product" yellow={false} path="addProduct"/>
                </div>
            </div>
        </div>
    )
}