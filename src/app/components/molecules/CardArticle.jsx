import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.a`
  width: 25%;
  height: 300px;
  padding: 10px 20px;
  color: black;

  @media (max-width: 1024px) {
    width: 50%;
    height: 370px;
  }

  @media (max-width: 470px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ArticleTitle = styled.h3`
  font-size: 16px;
  line-height: 20px;
  padding: 10px 0px 12px;
  height: auto;
  width: 100%;
  cursor: pointer;

  &:hover {
    color: #ed553b;
    text-decoration: underline;
  }
`;

const ArticleDescription = styled.p`
  font-size: 12px;
  line-height: 15px;
  width: 100%;
  cursor: pointer;
`;

const CardArticle = () => (
  <Container href="/articles/1234">
    <Image src='images/calculateFunc.png' />
    <ArticleTitle> Python for blockchain developers</ArticleTitle>
    <ArticleDescription>
      Aprenda python para desenvolver aquela aplicação de blockchain que vai revolucionar o mundo.
    </ArticleDescription>
  </Container>
);

export default CardArticle;
