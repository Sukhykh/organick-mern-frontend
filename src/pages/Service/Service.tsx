import { SmallBanner } from '../../components/SmallBanner/SmallBanner.tsx';
import { WhatWeGrow } from '../../components/WhatWeGrow/WhatWeGrow.tsx';
import { VideoSection } from '../../components/VideoSection/VideoSection.tsx';
import bannerPng from '../../assets/images/Banners/Services/services-banner.png';
import bannerWebp from '../../assets/images/Banners/Services/services-banner.webp';
import patternPng from '../../assets/images/Banners/Services/services-pattern.png';
import patternWebp from '../../assets/images/Banners/Services/services-pattern.webp';

const data = {
	bannerPng: bannerPng,
	bannerWebp: bannerWebp,
	patternPng: patternPng,
	patternWebp: patternWebp,
	title: 'Services',
};

export const Service = () => {
	return (
		<>
			<SmallBanner data={data} />
			<WhatWeGrow />
			<VideoSection />
		</>
	);
};
