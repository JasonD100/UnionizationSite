import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButtonPages } from '../hero/HeroOneButtonPages';
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
      <HeroOneButtonPages
        title={
          <>
            <span className="text-retro-black">
              {'Unionizing Walmarts Workforce\n'}
            </span>
          </>
        }
        description="Notice: This site is not affiliated with Walmart."
        button={
          <Link href="/FormAUnion">
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
