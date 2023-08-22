import { NavLink } from 'react-router-dom'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Subtitle } from '../Subtitle/Subtitle'
import { NewsCard } from '../NewsCard/NewsCard.tsx'
import sprite from '../../assets/images/sprite.svg'
import styles from './NewsSection.module.scss'

import { newsCardData } from '../../data/newsCardData.ts'


export const NewsSection = () => {
    const cardToShow = newsCardData.slice(0, 2)
    const handleClicker =(e: any) => {
        e.preventDefault()
    }
    return (
        <section className={ styles.newsSection }>
            <div className={ styles.newsSection__container }>
                <div className={ styles.newsSection__wrapper }>
                    <div className={ styles.newsSection__titleWrapper }>
                        <div className={ styles.newsSection__titleOuther }>
                            <Subtitle green title='news'/>
                            <SectionTitle title='Discower weekly content about organic food & more' hero={false} black/>
                        </div>
                        <NavLink className={ styles.newsSection__button } to={ 'news' }>
                            <span className={ styles.newsSection__buttonText } >more news</span>
                            <span className={ styles.newsSection__buttonItem }>
                                <svg className={ styles.newsSection__buttonSvg }>
                                    <use className={ styles.newsSection__buttonIcon } xlinkHref={ `${ sprite }#buttonArrow` } />
                                </svg>
                            </span>
                        </NavLink>  
                    </div>
                    <div className={ styles.newsSection__cardWrapper }>
                        {cardToShow?.map(card => <NewsCard data={card} onPage onClick={handleClicker} key={card.id} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}