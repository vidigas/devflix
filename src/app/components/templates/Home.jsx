import React from 'react';
import styled from 'styled-components';

import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';
import instructionData from '../../../data/instructions';
import PageTitle from '../molecules/PageTitle';
import Headlines from '../molecules/Headlines';
import Articles from '../organisms/Articles';

const Container = styled.div`
  width: 100%;
`;

const TextTitle = styled.div`
  text-align: center;
  margin: 50px auto 80px;
  font-size: 40px;
  line-height: 40px;
`;

const Space = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 25px;
`;

const AdSection = styled.div`
  margin-top: 5px;
  margin: 25px;
  width: 100%;
  background-color: green;
  height: 160px;
  border-style: solid;
  border-color: #eff1f2;
  border-width: 1px 0px 1px 0px;
`;

const Home = ({ selected_page }) => (
  <Container>
    <section>
      <Headlines />
    </section>
    <Space />
    <AdSection />
    <Articles />
    <Articles />
    <AdSection />
    <Articles />
    <AdSection />
  </Container>
);

export default Home;
