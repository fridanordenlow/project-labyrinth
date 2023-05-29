import React from 'react';
import styled from 'styled-components/macro';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterText>Designed by students @ Technigo Bootcamp 2023</FooterText>
      <LinkWrapper>
        <StyledLink href="https://www.linkedin.com/in/emiliasaberski/">
          Emilia
          <Icon className="fa-brands fa-linkedin-in" />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/fridanordenlow/">
          Frida
          <Icon className="fa-brands fa-linkedin-in" />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/andrea-hedstr%C3%B6m-3549a516b/">
          Andrea
          <Icon className="fa-brands fa-linkedin-in" />
        </StyledLink>
      </LinkWrapper>
    </FooterSection>
  )
}

const FooterSection = styled.div`
  font-size: 15px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
  bottom: 0;
  left: 0;
  margin-bottom: 10px;
  height: 3.5rem;
`
const FooterText = styled.div`
font-size: 16px;
color: grey;
margin-bottom: -20px;
text-align: center;
`

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: 20px;
  color: grey;
  &:hover {
    color: white;
  }
`
const LinkWrapper = styled.div`
display: flex;
`

const Icon = styled.span`
  font-size: 18px;
`