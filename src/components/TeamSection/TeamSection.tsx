import { SectionTitle } from '../SectionTitle/SectionTitle.tsx'
import { Subtitle } from '../Subtitle/Subtitle.tsx'
import { TeamCard } from '../TeamCard/TeamCard.tsx'
import { teamData } from '../../data/teamData.ts'
import styles from './TeamSection.module.scss'

export const TeamSection = () => {
    return (
        <section className={ styles.teamSection }>
            <div className={ styles.teamSection__container }>
                <div className={ styles.teamSection__wrapper }>
                    <Subtitle title='team' green/>
                    <div className={ styles.teamSection__titleWrapper }>
                        <SectionTitle title='our organic experts' black hero={false}/>
                    </div>
                    <p className={ styles.teamSection__text }>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <div className={ styles.teamSection__cardWrapper }>
                        {teamData?.map(card => <TeamCard data={card} key={card.id}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}