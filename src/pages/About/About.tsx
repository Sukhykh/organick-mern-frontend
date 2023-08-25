import { NewsForm } from '../../components/NewsForm/NewsForm.tsx';
import { SmallBanner } from '../../components/SmallBanner/SmallBanner.tsx';
import { WhyChooseUs } from '../../components/WhyChooseUs/WhyChooseUs.tsx';
import { AboutPageAbout } from '../../components/AboutPageAbout/AboutPageAbout.tsx';
import { TeamSection } from '../../components/TeamSection/TeamSection.tsx';
import { AboutPageOffers } from '../../components/AboutPageOffer/AboutPageOffer.tsx';
import bannerPng from '../../assets/images/Banners/About/about-banner.png';
import bannerWebp from '../../assets/images/Banners/About/about-banner.webp';
import patternPng from '../../assets/images/Banners/About/about-patterns.png';
import patternWebp from '../../assets/images/Banners/About/about-patterns.webp';

const data = {
	bannerPng: bannerPng,
	bannerWebp: bannerWebp,
	patternPng: patternPng,
	patternWebp: patternWebp,
	title: 'about us',
};

export const About = () => {
    return (
        <>
            <SmallBanner data={data}/>
            <AboutPageAbout />
            <WhyChooseUs />
            <TeamSection />
            <AboutPageOffers />
            <NewsForm />
        </>
    )
}