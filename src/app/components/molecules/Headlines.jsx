import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardMain from './CardMain';
import ListOfCards from './ListOfCards';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 12px 22px 20px;
  height: 560px;

  @media (max-width: 850px) {
    display: block;
    height: 1074px;
  }
`;

const LeftDiv = styled.div`
  width: 55%;
  border-right: 0.1em solid #eff1f2;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const RightDiv = styled.div`
  width: 45%;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const CardMainData = {
  tag: 'Destaque da semana',
  img: 'images/calculateFunc.png',
  category: 'Desenvolvimento Web',
  title: 'Aprenda React/Redux',
  desc: `Saiba tudo das mais modernas práticas de react e redux que estão sendo utilizadas pelas maiores empresa da internet.`,
};

const Headlines = () => (
  <Container>
    <LeftDiv>
      <CardMain
        tag={CardMainData.tag}
        img={CardMainData.img}
        title={CardMainData.title}
        desc={CardMainData.desc}
        category={CardMainData.category}
      />
    </LeftDiv>
    <RightDiv>
      <ListOfCards img={CardMainData.img} />
    </RightDiv>
  </Container>
);

export default Headlines;
