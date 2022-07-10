import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { SectionHome } from '../layout/SectionHome';

const Hero = () => (
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

    <SectionHome yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-retro-black">{'The Unionization\n'}</span>
            <span className="text-retro-black">Walmart Employees</span>
          </>
        }
        description="There are currenty 0 Walmart Unions"
        button={
          <Link href="/Join">
            <a>
              <Button xl>How do I join?</Button>
            </a>
          </Link>
        }
      />
    </SectionHome>
  </Background>
);

export { Hero };
