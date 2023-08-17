import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './SmallBanner.module.scss'

type SmallBannerProps = {
    data: {
        bannerPng: string;
        bannerWebp: string;
        patternPng: string;
        patternWebp: string;
        title: string;
    }
}

export const SmallBanner: React.FC<SmallBannerProps> = ({ data }) => {
    const { bannerPng, bannerWebp, patternPng, patternWebp, title } = data
    return (
        <div className={ styles.smallBanner }>
            <div className={ styles.smallBanner__bannerWrapper }>
                <picture>
                    <source srcSet={ bannerWebp } type="image/webp"/>
                    <img className={ styles.smallBanner__banner } src={ bannerPng } alt="banner" width={1920} height={450} />
                </picture>
            </div>
            <div className={ styles.smallBanner__patternWrapper }>
                <picture>
                    <source srcSet={ patternWebp } type="image/webp"/>
                    <img className={ styles.smallBanner__pattern } src={ patternPng } alt="pattern" width={1920} height={450} />
                </picture>
            </div>
            <div className={ styles.smallBanner__titleWrapper }>
                <SectionTitle title={title} black={true} hero={true}/>
            </div>
        </div>
    )
}