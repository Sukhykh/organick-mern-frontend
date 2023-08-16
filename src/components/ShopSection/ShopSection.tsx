import { SectionTitle } from '../SectionTitle/SectionTitle.tsx'
import { Subtitle } from '../Subtitle/Subtitle.tsx'
import styles from './ShopSection.module.scss'



export const ShopSection = () => {
    return (
        <section className={ styles.shopSection }>
            <div className={ styles.shopSection__container }>
                <div className={ styles.shopSection__wrapper }>
                    <Subtitle title='categories' green={ true }/>
                    <SectionTitle title='our products' hero={ false } black={ true }/>
                    <div className={ styles.shopSection__cardWrapper }>

                    </div>
                    <button></button>
                </div>
            </div>
        </section>
    )
}