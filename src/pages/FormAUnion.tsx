import { Background } from '../background/Background';
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
            <span className="text-retro-black">
              {'4 Steps to Form a Union\n'}
            </span>
          </>
        }
        description="When you and your co-workers come together to form a union, you get the right to negotiate with your employer over wages, benefits and working conditions."
        button={null}
      ></HeroOneButtonPages>
      <HeroOneButtonPages
        title={
          <>
            <span className="text-3xl text-retro-black">{'Step 1.\n'}</span>
          </>
        }
        description="Get together with your co-workers who may share a common interest in organizing a union."
        button={null}
      ></HeroOneButtonPages>

      <HeroOneButtonPages
        title={
          <>
            <span className="text-3xl text-retro-black">{'Step 2.\n'}</span>
          </>
        }
        description="Talk to a union organizer in order to strategize and to learn the next steps."
        button={null}
      ></HeroOneButtonPages>

      <HeroOneButtonPages
        title={
          <>
            <span className="text-3xl text-retro-black">{'Step 3.\n'}</span>
          </>
        }
        description="Talk to your co-workers to build support for the union."
        button={null}
      ></HeroOneButtonPages>

      <HeroOneButtonPages
        title={
          <>
            <span className="text-3xl text-retro-black">{'Step 4.\n'}</span>
          </>
        }
        description="Show that support through an election or a card-check once you have a strong majority."
        button={null}
      ></HeroOneButtonPages>
    </Section>
  </Background>
);

export default FormAUnion;
