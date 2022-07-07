import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { VerticalFeatureRownested } from '../feature/VerticalFeatureRownested';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const FormAUnion = () => (
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
            <span className="text-retro-black">{'Forming a Union\n'}</span>
          </>
        }
        description="By forming a union you will get more democracy in your workplace and get more of an access to the profits created from YOUR labor."
        button={
          <Link href="https://aflcio.org/formaunion/4-steps-form-union">
            <a>
              <Button xl>Form a Union</Button>
            </a>
          </Link>
        }
      ></HeroOneButton>
      <VerticalFeatureRownested
        title="The FormAUnion."
        description="Union workers make, on average, 11.2% higher pay than their non unionized counterparts"
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
    </Section>
  </Background>
);

export default FormAUnion;
