import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3000, text: 'Linkdin Followers', },
  { number: 35, text: 'Open Source Projects'},
  { number: 10, text: 'Frameworks Learnt', },
  { number: 500, text: 'Github Contributions', }
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>Personal Achievments</SectionTitle>
   <Boxes>
     {data.map((card,index)=>(
       <Box key={index}>
       <BoxNum>{card.number}+</BoxNum>
       <BoxText>{card.text}</BoxText>
         </Box>
      ))}
   </Boxes>
 </Section>
);

export default Acomplishments;
