import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 115px;
  padding-top: 24px;
`;

const Title = styled.h3`
  width: 100%;
  margin: 0 22px;
  font-size: 24px;
  font-weight: 300;
`;

const Subtitle = styled.p`
  width: 100%;
  margin: 12px 22px;
  line-height: 1.35em;
`;

const Space = styled.div`
  width: 100%;
  height: 20px;
`;

const TitleCard = ({ page }) => (
  <Container>
    <Space />
    <Title> {`${page}`}</Title>`
    <Subtitle> Explore as histórias mais incríveis e. se surpreenda com a criatividade do ser humano</Subtitle>
  </Container>
);

export default TitleCard;
