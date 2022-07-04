import { Background } from '../background/Background';
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
              {'This is a ContactAUnionOrganizer page\n'}
            </span>
          </>
        }
        description="This is a different page"
        button={null}
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
