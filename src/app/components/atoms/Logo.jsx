import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 132px;
  height: 83px;
  padding-top: 24px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 71px;
  height: 34px;
`;

const DivLogo = styled.a`
  width: 198px;
  height: 34px;
  position: relative;
  left: -23%;
  line-height: 18px;
  font-size: 26px;
`;

const Logo = () => (
  <Container>
    <DivLogo href="/" >Devflix</DivLogo>
  </Container>
);

export default Logo;

// <Image 	src='images/brand-logo.svg' />
