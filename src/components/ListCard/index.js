import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const ListCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;


export default function CartItem() {
  return (
    <ListCard>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ListCard>
  );
}
