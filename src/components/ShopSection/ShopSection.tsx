import { useEffect, useState } from 'react'
import { useProductStore } from "../../store/productStore.ts"
import { SectionTitle } from '../SectionTitle/SectionTitle.tsx'
import { Subtitle } from '../Subtitle/Subtitle.tsx'
import { ProductCard } from '../ProductCard/ProductCard.tsx';
import { Product } from '../../types/product.ts';
import sprite from '../../assets/images/sprite.svg'
import styles from './ShopSection.module.scss'



export const ShopSection = () => {
    const [modalIsOpen, SetModalIsOpen] = useState<boolean>(false)
    const productsToShow = useProductStore(state => state.productsToShow)
    const slicer = useProductStore(state => state.slicer)
    const setProductsToShow = useProductStore(state => state.setProductsToShow)
    const setProducts = useProductStore(state => state.setProducts)
    const setSlicertoNull = useProductStore(state => state.setSlicertoNull)
    const setSlicertoNumber = useProductStore(state => state.setSlicertoNumber)


    useEffect(() => {
        const fetchDataAndSetProducts = async () => {
            try {
                await setProducts(); 
                setProductsToShow();
            } catch (error) {
                console.error("Error fetching and setting products:", error);
            }
        };
        fetchDataAndSetProducts();
    }, []);


    const consoling = () => {
        console.log(productsToShow)
        console.log(slicer)
    }

    const loadMore = (e: any) => {
        e.preventDefault()
        setSlicertoNull()
        setProductsToShow();
    }

    const hideAll = (e: any) => {
        e.preventDefault()
        setSlicertoNumber()
        setProductsToShow();
    }

    const handleClicker = (el: Product) => {
        SetModalIsOpen(true)
        console.log(el.title)
        console.log(modalIsOpen)
    }

    return (
        <section className={ styles.shopSection }>
            <div className={ styles.shopSection__container }>
                <div className={ styles.shopSection__wrapper }>
                    <Subtitle title='categories' green={ true }/>
                    <div className={ styles.shopSection__titleWrapper }>
                        <SectionTitle title='our products' hero={ false } black={ true }/>
                    </div>
                    <div className={ styles.shopSection__cardsWrapper }>
                        { productsToShow?.map(el => <ProductCard product={el} key={el._id} onClick={handleClicker}/> )}
                    </div>
                    <div className={ styles.shopSection__buttonWrapper }>
                        {slicer && <a className={ styles.shopSection__button } href="#" onClick={ (e) => loadMore(e) }>
                            <span className={ styles.shopSection__buttonText }>load more</span>
                            <span className={ styles.shopSection__buttonItem }>
                                <svg className={ styles.shopSection__buttonSvg }>
                                    <use className={ styles.shopSection__buttonIcon } xlinkHref={ `${ sprite }#buttonArrow` } />
                                </svg>
                            </span>
                        </a>}
                        {!slicer && <a className={ styles.shopSection__button } href="#" onClick={ (e) => hideAll(e) }>
                            <span className={ styles.shopSection__buttonText } >hide all</span>
                            <span className={ styles.shopSection__buttonItem }>
                                <svg className={ styles.shopSection__buttonSvg }>
                                    <use className={ styles.shopSection__buttonIcon } xlinkHref={ `${ sprite }#buttonArrow` } />
                                </svg>
                            </span>
                        </a>}
                    </div>
                    <div onClick={consoling}>get cart</div>
                </div>
            </div>
        </section>
    )
}