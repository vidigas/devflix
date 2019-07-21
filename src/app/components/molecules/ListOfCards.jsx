import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardList from './CardList';

const Container = styled.div`
  width: 100%;
  padding: 20px 30px 0px 30px;

  @media (max-width: 850px) {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 0px 0px 0px;
  }
`;

const TagText = styled.h3`
  font-size: 18px;
  margin-bottom: 18px;
`;

const ViewMore = styled.a`
  color: blue;
  font-size: 16px;
  cursor: pointer;
`;

const Space = styled.div`
  width: 100%;
  height: 15px;
`;

const renderCards = (articles, img) => articles.map((article) => <CardList img={img} />);

const ListOfCards = ({ img }) => (
  <Container>
    <TagText>Recomendados</TagText>
    {renderCards([1, 2, 3], img)}
    <Space></Space>
    <ViewMore>Ver Mais</ViewMore>
  </Container>
);

export default ListOfCards;
