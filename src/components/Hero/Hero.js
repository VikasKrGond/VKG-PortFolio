import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection row nopadding>
      <SectionTitle main center>
        Welcome to <br/>
        Vikas Kumar Gond A.k.a VKG Portfolio
      </SectionTitle>
      <SectionText>
        Hello everyone, Myself Vikas Kumar Gond a Full-Stack Web Developer, Android/iOS Developer and a passionate competitieve programmer. 
      </SectionText>
      <Button onClick={()=>window.location='#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;