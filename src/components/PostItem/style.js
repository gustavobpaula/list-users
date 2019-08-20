import styled from 'styled-components';

export const Post = styled.article`
  border-bottom: 1px solid #ccc;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;
  padding: 80px 0;

  @media (max-width: 1200px) {
    margin: 0 5%;
  }

  @media (max-width: 768px) {
    display: block;
  }

  &:nth-child(even) {
    grid-auto-flow: dense
  }
`;

export const BoxTitle = styled.div`
  grid-column: 2;

  &.even {
    grid-column: 1;
  }
`;

export const BoxDescription = styled.div`
  grid-column: 1;

  &.even {
    grid-column: 2;
  }
`;

export const Title = styled.h2`
  color: #333;
  font-size: 45px;
  margin: 0;

  @media (max-width: 425px) {
    font-size: 25px;
  }
`;

export const User = styled.p`
  color: #999;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  line-height: 200%;
  margin: 0;
`;
