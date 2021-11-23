import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle href="tel:111-111-111">111-111-111</LinkTitle>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle href="mailto:vikaskumargond@gmail.com">Email</LinkTitle>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy;This Site is Developed by VIKAS KUMAR GOND</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/VikasKrGond">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vikas-kumar-gond-bb1991201/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
