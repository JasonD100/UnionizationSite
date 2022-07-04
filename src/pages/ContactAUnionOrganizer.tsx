import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const ContactAUnionOrganizer = () => (
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
              {'This is a ContactAUnionOrganizer page\n'}
            </span>
            <span className="text-retro-black">This is a different page</span>
          </>
        }
        description="This is a different page"
        button={
          <Link href="https://aflcio.org/formaunion/collective-voice#:~:text=Union%20members%20earn%20better%20wages,69%25%20of%20nonunion%20workers%20do.">
            <a>
              <Button xl>How do I join?</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export default ContactAUnionOrganizer;
