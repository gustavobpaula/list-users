import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-family: Roboto, Arial;
  margin: 5px;
  max-width: 300px;
  padding: 20px 30px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #eee;
  }
`;

const Name = styled.h3`
  margin: 0;
`;

const Company = styled.p`
  margin: 0;
`;

export default function CartItem() {
  return (
    <Card>
      <Name>Gustavo Bento de Paula</Name>
      <Company>Jussi - São Paulo</Company>
    </Card>
  );
}
