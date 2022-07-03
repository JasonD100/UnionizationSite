import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-retro-black">
    {/* <Meta title={AppConfig.title} description={AppConfig.description} /> */}
    <NavbarTwoColumns
      logo={'Join'}
      logo1={'Info'}
      logo2={'Money'}
      logo3={'PogU'}
    />
    <Hero />
    <VerticalFeatures />
    {/* <Banner /> */}
    {/* <Footer /> */}
  </div>
);

export { Base };
