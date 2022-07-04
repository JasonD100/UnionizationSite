import { Background } from '../background/Background';
import { VerticalFeatureRownested } from '../feature/VerticalFeatureRownested';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Profits = () => (
  <Background color="bg-retro-tan">
    {/*    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
*/}
    <NavbarTwoColumns />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-retro-black">
              {"Walmart's record profits\n"}
            </span>
          </>
        }
        description="Walmart has had recorded profits year over year"
        button={null}
      ></HeroOneButton>
      <div style={{ border: '1px solid #dfdfdf' }}>
        <Background color="bg-retro-black">
          <iframe
            id="chart_iframe"
            title="Interactive chart: Walmart Gross Profit 2010-2022 | WMT"
            width="800"
            height="680"
            marginHeight={0}
            marginWidth={0}
            frameBorder="0"
            scrolling="NO"
            src="https://www.macrotrends.net/assets/php/fundamental_iframe.php?t=WMT&amp;type=gross-profit&amp;statement=income-statement&amp;freq=Q"
          ></iframe>
        </Background>
      </div>
      <VerticalFeatureRownested
        title="how much has employee wages increased"
        description="The very first American Federation of Labor (AFL) national convention passed “a resolution calling on states to ban children under 14 from all gainful employment” in 1881, and soon after states across the country adopted similar recommendations, leading up to the 1938 Fair Labor Standards Act which regulated child labor on the federal level for the first time."
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRownested
        title="overview on benefits"
        description="In 1870, the average workweek for most Americans was 61 hours — almost double what most Americans work now. Yet in the late nineteenth century and the twentieth century, labor unions engaged in massive strikes in order to demand shorter workweeks so that Americans could be home with their loved ones instead of constantly toiling for their employers with no leisure time."
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRownested
        title="hours"
        description="“The rise of unions in the 1930′s and 1940′s led to the first great expansion of health care” for all Americans, as labor unions banded workers together to negotiate for health coverage plans from employers. In 1942, “the US set up a National War Labor Board. It had the power to set a cap on all wage increases."
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRownested
        title="attrition"
        description="Labor unions like the AFL-CIO federation led the fight for this 1993 law, which “requires state agencies and private employers with more than 50 employees to provide up to 12 weeks of job-protected unpaid leave annually for workers to care for a newborn, newly adopted child, seriously ill family member or for the worker’s own illness."
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
    </Section>
  </Background>
);

export default Profits;
