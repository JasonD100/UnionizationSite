import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-retro-black">
    {/* <Meta title={AppConfig.title} description={AppConfig.description} /> */}
    <NavbarTwoColumns
      logo={'History'}
      logo1={'Retirement'}
      logo2={'Form a Union'}
      logo3={'Contact a Union Organizer'}
    />
    <Hero />
    <VerticalFeatures />
    {/* <Banner /> */}
    {/* <Footer /> */}
  </div>
);

export { Base };
