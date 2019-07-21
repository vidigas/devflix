import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardList from '../molecules/CardList';
import CardArticle from '../molecules/CardArticle';

const Container = styled.div`
  margin-top: 15px;
  width: 100%;
  height: auto;
  padding: 28px 0px;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 30px;
  height: 36px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 13px;
`;

const ViewMore = styled.a`
  color: #4c6cf8;
  font-size: 14px;
  cursor: pointer;
`;

const ArticlesWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1024px) {
    height: 740px;
  }

  @media (max-width: 470px) {
    height: 1480px;
  }
`;

const Articles = () => (
  <Container>
    <Header>
      <Title>Em Alta</Title>
      <ViewMore>Ver Mais</ViewMore>
    </Header>
    <ArticlesWrapper>
      <CardArticle />
      <CardArticle />
      <CardArticle />
      <CardArticle />
    </ArticlesWrapper>
  </Container>
);

export default Articles;
