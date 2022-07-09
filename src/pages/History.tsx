import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const History = () => (
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
              {'Notable things Unions have done\n'}
            </span>
          </>
        }
        description="With collective action Unions were able to get a better quality of life"
        button={null}
      ></HeroOneButton>

      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">
              {'Ending of Child Labor.\n'}
            </span>
          </>
        }
        description="The very first American Federation of Labor (AFL) national convention passed “a resolution calling on states to ban children under 14 from all gainful employment” in 1881, and soon after states across the country adopted similar recommendations, leading up to the 1938 Fair Labor Standards Act which regulated child labor on the federal level for the first time."
        button={null}
      ></HeroOneButton>

      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">
              {'The Weekend.\n'}
            </span>
          </>
        }
        description="In 1870, the average workweek for most Americans was 61 hours — almost double what most Americans work now. Yet in the late nineteenth century and the twentieth century, labor unions engaged in massive strikes in order to demand shorter workweeks so that Americans could be home with their loved ones instead of constantly toiling for their employers with no leisure time."
        button={null}
      ></HeroOneButton>

      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">
              {'40 hour work week.\n'}
            </span>
          </>
        }
        description="“The rise of unions in the 1930′s and 1940′s led to the first great expansion of health care” for all Americans, as labor unions banded workers together to negotiate for health coverage plans from employers. In 1942, “the US set up a National War Labor Board. It had the power to set a cap on all wage increases."
        button={null}
      ></HeroOneButton>

      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-black">
              {'Family and Medical Leave Act.\n'}
            </span>
          </>
        }
        description="Labor unions like the AFL-CIO federation led the fight for this 1993 law, which “requires state agencies and private employers with more than 50 employees to provide up to 12 weeks of job-protected unpaid leave annually for workers to care for a newborn, newly adopted child, seriously ill family member or for the worker’s own illness."
        button={null}
      ></HeroOneButton>
    </Section>
  </Background>
);

export default History;
