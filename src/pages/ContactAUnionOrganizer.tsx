import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButtonPages } from '../hero/HeroOneButtonPages';
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
      <HeroOneButtonPages
        title={
          <>
            <span className="text-retro-black">
              {'Contact a professional union organizer\n'}
            </span>
          </>
        }
        description="If you need help forming a union please take advantage of the American Federation of Labor and Congress of Industrial Organizations resources!"
        button={
          <Link href="https://aflcio.org/formaunion/contact">
            <a>
              <Button xl>Contact a union organizer</Button>
            </a>
          </Link>
        }
      ></HeroOneButtonPages>
      <br></br>
      <br></br>
      <img
        src="/assets/images/union-membership-rates-o.png"
        className="max-w-full h-auto"
        alt="..."
      />
    </Section>
  </Background>
);

export default ContactAUnionOrganizer;
