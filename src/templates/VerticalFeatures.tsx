import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-retro-black">
    <Section
      title="Better Pay, Vacation, Law"
      description="Unionizing can offer you more monthly take home pay and a better quality of life with a lighter schedule. Who doesn't like more pay and less hours?"
    >
      <VerticalFeatureRow
        title="The Money."
        description="Union workers make, on average, 11.2% higher pay than their non unionized counterparts. Black, Latino and women are paid 26%, 39.2% and 23.8% more, respectively, when they belong to a union."
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />

      <VerticalFeatureRow
        title="The Vacation."
        description="Union workers make, on average, 11.2% higher pay than their non unionized counterparts"
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="The Law."
        description="Union workers make, on average, 11.2% higher pay than their non unionized counterparts"
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
