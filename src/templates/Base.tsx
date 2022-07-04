import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-retro-black">
    {/* <Meta title={AppConfig.title} description={AppConfig.description} /> */}
    <NavbarTwoColumns />
    <Hero />
    <VerticalFeatures />
    {/* <Banner /> */}
    {/* <Footer /> */}
  </div>
);

export { Base };
