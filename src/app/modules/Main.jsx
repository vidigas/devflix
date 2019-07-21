import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/atoms/Logo';
import Menu from '../components/molecules/Menu';

import Home from '../components/templates/Home';
import Solution from '../components/templates/Solution';
import Tests from '../components/templates/Tests';

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100vh;
  overflow-x: hidden;
`;

const Header = styled.div`
  width: 100%;
  background-color: white;
  height: 66px;
  display: flex;

  @media (max-width: 768px) {
    height: 122px;
  }
`;

const SubHeader = styled.div`
  width: 100%;
  backgroud-color: white;
  height: 60px;
  border-style: solid;
  border-color: #eff1f2;
  border-width: 1px 0px 1px 0px;
`;

const CardWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  background-color: white;
  height: auto;
  padding-bottom: 20px;
  color: #313c52;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 150px;
  border-top: 1px solid #eff1f2;
  padding: 60px;
`;

const renderContent = (selected) => {
  switch (selected) {
    case 'Home':
      return <Home selected_page={'Dias de muita glória no império'} />;
    case 'Solution':
      return <Solution />;
    case 'Tests':
      return <Tests />;
    default:
      break;
  }
};

const Main = () => {
  const [selected, selectMenuItem] = useState('Home');

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <SubHeader>
        <Menu selectMenuItem={selectMenuItem} selectedItem={selected} />
      </SubHeader>
      <CardWrapper>{renderContent(selected)}</CardWrapper>
      <Footer>Footer do Bagulho</Footer>
    </Container>
  );
};

export default Main;
