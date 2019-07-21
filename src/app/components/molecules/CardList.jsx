import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.a`
  width: 100%;
  margin-bottom: 10px;
  padding: 5px 10px;
  display: flex;
  min-height: 150px;
  border-bottom: 0.1em solid #eff1f2;
  color: black;
  cursor: pointer;
`;

const Image = styled.img`
  width: 30%;
  max-height: 120px;
`;

const TitleContainer = styled.div`
  padding-left: 15px;
  background-color: 'blue';
  max-height: 120px;
  overflow-y: hidden;
  text-overflow: ellipsis;
  width: 60%;
`;

const Title = styled.h3`
  font-size: 14px;
  margin-bottom: 5px;
  &:hover {
    color: #ed553b;
    text-decoration: underline;
  }
`;

const ArticleCategory = styled.h4`
  margin-bottom: 5px;
  font-size: 12px;
  color: #e4613b;
`;

const Subtitle = styled.p`
  font-size: 11px;
`;

const CardList = ({ img }) => (
  <Container href="/articles/jhjh">
    <Image src={img} />
    <TitleContainer>
      <ArticleCategory>Desenvolvimento App IOS</ArticleCategory>
      <Title>ACurso básico de Swift 3</Title>
      <Subtitle>
        Do zero até lançar seu aplicativo na apple store. Aprenda tudo de swift e xcode nesse curso super legal.
      </Subtitle>
    </TitleContainer>
  </Container>
);

export default CardList;
