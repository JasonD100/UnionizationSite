import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { VerticalFeatureRownested } from '../feature/VerticalFeatureRownested';
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
              {'Contact a professional union organizer\n'}
            </span>
          </>
        }
        description="If you need help forming a union please take advantage of the American Federation of Labor and Congress of Industrial Organizations resources!"
        button={
          <Link href="https://aflcio.org/formaunion/contact">
            <a>
              <Button xl>Contact</Button>
            </a>
          </Link>
        }
      ></HeroOneButton>
      <VerticalFeatureRownested
        title="The ContactAUnionOrganizer."
        description="Union workers make, on average, 11.2% higher pay than their non unionized counterparts"
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
    </Section>
  </Background>
);

export default ContactAUnionOrganizer;
