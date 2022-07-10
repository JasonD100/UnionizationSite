import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButtonPages } from '../hero/HeroOneButtonPages';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const FormAUnion = () => (
  <Background color="bg-retro-tan">
    <NavbarTwoColumns />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButtonPages
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

export default FormAUnion;
