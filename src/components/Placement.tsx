import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../components/Placement/Hero';
import PlacementStats from '../components/Placement/PlacementStats';
import HiringPartners from '../components/Placement/HiringPartners';
import SuccessStories from '../components/Placement/SuccessStories';
import PlacementProcess from '../components/Placement/PlacementProcess';
import CareerTracks from '../components/Placement/CareerTracks';
import PlacementSupport from '../components/Placement/PlacementSupport';
import EligibilityCriteria from '../components/Placement/EligibilityCriteria';
import FAQ from '../components/Placement/FAQ';
import CallToAction from '../components/Placement/CallToAction';

function Placement() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // animate every time section enters view
  }, []);

  return (
      <><div data-aos="fade-down">
      <Hero />
    </div><div data-aos="zoom-in">
        <PlacementStats />
      </div><div data-aos="fade-up">
        <HiringPartners />
      </div><div data-aos="fade-up">
        <SuccessStories />
      </div><div data-aos="fade-up">
        <PlacementProcess />
      </div><div data-aos="fade-up">
        <CareerTracks />
      </div><div data-aos="fade-up">
        <PlacementSupport />
      </div><div data-aos="fade-up">
        <EligibilityCriteria />
      </div><div data-aos="fade-up">
        <FAQ />
      </div><div data-aos="fade-up" data-aos-delay="100">
        <CallToAction />
      </div></>

  );
}

export default Placement;
