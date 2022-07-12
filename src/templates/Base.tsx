import Head from 'next/head';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-retro-black">
    {/* <Meta title={AppConfig.title} description={AppConfig.description} /> */}
    <Head>
      <meta property="og:type" content="website" />
    </Head>
    <Head>
      <meta property="og:url" content="https://www.walmartworkersunion.com/" />
    </Head>
    <Head>
      <meta property="og:title" content="Union Benefits | Walmart" />
    </Head>
    <Head>
      <meta
        property="og:description"
        content="Unionization Benefits for the larget company in the retail industry!"
      />
    </Head>
    <Head>
      <meta property="og:image" content="../assets/images/wagegap.png" />
    </Head>
    <NavbarTwoColumns />
    <Hero />
    <VerticalFeatures />
    {/* <Banner /> */}
    {/* <Footer /> */}
  </div>
);

export { Base };
