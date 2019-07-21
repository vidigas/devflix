import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.a`
  width: 100%;
  padding: 20px 30px 0px 0px;
  cursor: pointer;
  color: black;
`;

const TagText = styled.h3`
  font-size: 18px;
  margin-bottom: 18px;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
`;

const ArticleTitle = styled.h3`
  font-size: 18px;
  line-height: 26px;
  padding: 10px 0px 12px;
  height: auto;
  width: 90%;
  cursor: pointer;

  &:hover {
    color: #ed553b;
    text-decoration: underline;
  }
`;

const ArticleDescription = styled.p`
  font-size: 14px;
  line-height: 15px;
  width: 90%;
  cursor: pointer;
`;

const ArticleCategory = styled.h3`
  margin-top: 15px;
  font-size: 16px;
  line-height: 15px;
  width: 90%;
  cursor: pointer;
  color: #e4613b;
`;

const CardMain = ({ tag, img, title, desc, category }) => (
  <Container href="/articles/123">
    <TagText>{tag}</TagText>
    <Image src={img} />
    <ArticleCategory>{category}</ArticleCategory>
    <ArticleTitle href="/articles/123">{title}</ArticleTitle>
    <ArticleDescription>{desc}</ArticleDescription>
  </Container>
);

export default CardMain;
