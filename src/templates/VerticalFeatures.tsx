import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-retro-black">
    <Section
      title="Better Pay, Vacation, Law"
      description="Unionizing can offer you more monthly take home pay and a better quality of life with a more consistent schedule."
    >
      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-tan">{'The Money.\n'}</span>
          </>
        }
        description="Union workers make, on average, 11.2% higher pay than their non unionized counterparts. Black, Latino and women are paid 26%, 39.2% and 23.8% more, respectively, when they belong to a union."
        button={null}
      ></HeroOneButton>
      <img
        src="/assets/images/www.datawrapper.de___OTBRJ_.png"
        className="object-center embed-responsive-item"
        alt="..."
      />

      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-tan">{'The Vacation.\n'}</span>
          </>
        }
        description="When collective bargaining is done effectively, workers can obtain job security, better working conditions, higher wages, and quality health care. Unions can also negotiate to secure more vacation and sick time for employees, set set salary minimums, raise salary bands, and more. "
        button={null}
      ></HeroOneButton>
      <img
        src="/assets/images/www.datawrapper.de___OTBRJ_.png"
        className="object-center embed-responsive-item"
        alt="..."
      />
      <HeroOneButton
        title={
          <>
            <span className="text-3xl text-retro-tan">{'The Law.\n'}</span>
          </>
        }
        description="The Wagner Act guaranteed the basic rights of employees to organize into unions, collectively bargain for better working conditions, and take collective action by striking if necessary. "
        button={null}
      ></HeroOneButton>
      <img
        src="/assets/images/www.datawrapper.de___OTBRJ_.png"
        className="object-center embed-responsive-item"
        alt="..."
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
