import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/atoms/Logo';
import Menu from '../components/molecules/Menu';

import Home from '../components/templates/Home';
import Solution from '../components/templates/Solution';

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
  background-color: white;
  height: 60px;
  border-style: solid;
  border-color: #eff1f2;
  border-width: 1px 0px 1px 0px;
`;

const CardWrapper = styled.div`
  width: 80%;
  margin: 30px auto;
  background-color: white;
  height: auto;
  padding-left: 30px;
  padding-bottom: 20px;
  color: #313c52;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const AdSection = styled.div`
  width: 300px;
  heigth: 80%;
  background-color: green;
`;

const Footer = styled.div`
  width: 100%;
  height: 150px;
  border-top: 1px solid #eff1f2;
  padding: 60px;
`;

const renderContent = (selected) => <Solution />;

const Article = () => {
  const articleId = '12345654312345654321';

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <SubHeader>
        <Menu selectMenuItem={() => console.log('ueba')} selectedItem={'Home'} />
      </SubHeader>
      <ContentWrapper>
        <CardWrapper>{renderContent(articleId)}</CardWrapper>  
        <AdSection />
      </ContentWrapper>
      <Footer>Footer do Bagulho</Footer>
    </Container>
  );
};

export default Article;
