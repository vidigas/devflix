import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.li`
  height: 100%;
  min-width: 60px;

  cursor: pointer;
  margin: 0 10px;

  ${(props) => props.customStyle};
`;

const Item = styled.a`
  margin: 0 16px;
  height: 65px;
  min-width: 60px;
  line-height: 60px;
  font-size: 16px;
`;

const MenuItem = ({ name, selectedItem, selectMenuItem }) => (
  <ItemWrapper
    customStyle={selectedItem === name ? { color: '#e4613b' } : null}
    onClick={(e) => {
      console.log('12345', name);
      selectMenuItem(name);
    }}
  >
    <Item>{name}</Item>
  </ItemWrapper>
);

export default MenuItem;
