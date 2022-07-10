import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Retirement = () => (
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
            <span className="text-retro-black">{'Union Retirements\n'}</span>
          </>
        }
        description="94% percent of civilian union workers and 67% of nonunion workers had access to retirement benefits through their employer in March 2019."
        button={null}
      ></HeroOneButton>

      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">
              {'The Retirement.\n'}
            </span>
          </>
        }
        description={
          'Union workers make, on average, 11.2% higher pay than their nonunionized counterparts. Unions successfully lobbied to have the Butch Lewis Emergency Pension Plan Relief Act of 2021 added to theAmerican Rescue Plan.'
        }
        button={null}
      ></HeroOneButton>
      <img
        src="/assets/images/retirement-benefit-acces.png"
        className="max-w-full h-auto"
        alt="..."
      />

      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">
              {'Pension Plan Relief.\n'}
            </span>
          </>
        }
        description="This bill modifies the funding rules and provides financial assistance for certain pension plans that are underfunded or insolvent.

        First, the bill expands the authority of, and provides funding for, the Pension Benefit Guaranty Corporation (PBGC) to provide special partition assistance to a multiemployer pension plan that is insolvent or at risk of insolvency. The bill expands eligibility for partition assistance, provides funding for a plan to reach a projected funded ratio of 80% over a 30-year period, and does not require a plan to repay such assistance."
        button={null}
      ></HeroOneButton>
      <img
        src="/assets/images/union-membership-rates-o.png"
        className="max-w-full h-auto"
        alt="..."
      />
    </Section>
  </Background>
);

export default Retirement;
