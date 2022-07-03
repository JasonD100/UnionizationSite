import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-retro-green">
    <Section
      title="Better Pay and Work Schedule"
      description="Unionizing can offer you more monthly take home pay and a better quality of life with a lighter schedule. Who doesn't like more pay and less hours?"
    >
      <VerticalFeatureRow
        title="Your title here"
        description="Union workers make, on average, 11.2% higher pay than their non unionized counterparts"
        image="/assets/images/www.datawrapper.de___OTBRJ_.png"
        imageAlt="First feature alt text"
      />
      {/*
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> 
<div id="chartview-content" style="max-width: 660px; background: white; padding: 30px;"><iframe title="The Union Difference" aria-label="Range Plot" id="datawrapper-chart-OTBRJ" src="https://datawrapper.dwcdn.net/OTBRJ/2/" scrolling="no" frameborder="0" style="width: 0px; border: none; min-width: 100% !important; height: 361px;" height="354"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}}))}();
</script></div>

    */}
    </Section>
  </Background>
);

export { VerticalFeatures };
