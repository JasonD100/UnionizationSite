import { Background } from '../background/Background';
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
      <div
        style={{ border: '1px solid #dfdfdf' }}
        className="embed-responsive aspect-ratio-4/3"
      >
        <Background color="bg-retro-black">
          <iframe
            className="embed-responsive-item"
            title="Interactive chart: Walmart Gross Profit 2010-2022 | WMT"
            width="1000"
            height="680"
            marginHeight={0}
            marginWidth={0}
            frameBorder="0"
            scrolling="NO"
            src="https://www.macrotrends.net/assets/php/fundamental_iframe.php?t=WMT&amp;type=gross-profit&amp;statement=income-statement&amp;freq=Q"
          ></iframe>
        </Background>
      </div>

      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">
              {'5 Years of Employee Wages\n'}
            </span>
          </>
        }
        description="In the past 5 years the average pay for cashiers for walmart has increased from 9.06 per hour to 13.05 per hour citing Indeed. Inflation in the past 5 years has been 19.2% meaning that 9.06 in 2017 is 10.80 today. Which means that the pay has only increased 2.25 in the past 5 years despite skyrocketing rent, cost of living, and soaring profits"
        button={null}
      ></HeroOneButton>
      <img
        src="/assets/images/106615550-1594739489691map_2br_ppt.png"
        className="max-w-full h-auto"
        alt="..."
      />
      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">{'Benefits\n'}</span>
          </>
        }
        description="Walmart does offer retirement benefits through a 401k program. This means that the profits Walmart makes year over year does not impact the employees that make those profits in a meaningful way."
        button={null}
      ></HeroOneButton>
      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">{'Attrition\n'}</span>
          </>
        }
        description="Turnover at Wal-Mart is 44% a year, close to the industry average. In skilled and semi-skilled jobs, the fully loaded cost of replacing a worker who leaves (excluding lost productivity) is typically 1.5 to 2.5 times the worker’s annual salary. It benefits a company to have a low retention rate because unionization effots can be crushed to do people quitting."
        button={null}
      ></HeroOneButton>
      <img
        src="/assets/images/laborimage.jpg"
        /** https://hbr.org/2006/12/the-high-cost-of-low-wages#:~:text=In%20contrast%2C%20turnover%20at%20Wal,times%20the%20worker's%20annual%20salary. */
        className="max-w-full h-auto"
        alt="..."
      />
      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">{'Hours\n'}</span>
          </>
        }
        description="Almost half (46 percent) of nonunion workers say they have little or no input into the number of hours they work each week, compared with less than a quarter (22 percent) of union workers."
        button={null}
      ></HeroOneButton>
    </Section>
  </Background>
);

export default Profits;
