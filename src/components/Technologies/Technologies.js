import React from 'react';
import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {MdDeveloperMode} from 'react-icons/md';
import {FiFigma} from 'react-icons/fi';
import {AiFillCodepenSquare,AiFillGithub} from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with range of a technologies in the Web and App development world from Backend to Front End and Software Development .
    </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React.Js , Next.Js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Backend-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Node ,Express.Js , MongoDB , Firebase
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FiFigma size="3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with tools like <br/>
          Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <MdDeveloperMode size="3rem" />
      <ListContainer>
        <ListTitle>App Development</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React-Native
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <AiFillCodepenSquare size="3rem" />
      <ListContainer>
        <ListTitle>Software Development</ListTitle>
        <ListParagraph>
          Experience with <br/>
          C++, Java and Python
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <AiFillGithub size="3rem" />
      <ListContainer>
        <ListTitle>Version Control</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Github
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
