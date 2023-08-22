import { Logo } from "../Logo/Logo.tsx"
import { Navigation } from "../Navigation/Navigation.tsx"
import { Search } from "../Search/Search.tsx" 
import { HeaderCart } from "../HeaderCart/HeaderCart.tsx"
import styles from './Header.module.scss'

export const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__menuWrapper}>
                        <Logo isHeader/>
                        <Navigation />
                    </div>
                    <div className={styles.header__btnWrapper}>
                        <Search />
                        <HeaderCart/>
                    </div>
                </div>
            </div>
        </div>
    )
}