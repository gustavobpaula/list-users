import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.article`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
  max-width: 300px;
  padding: 20px 30px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #eee;
  }
`;

export const Name = styled.h3`
  color: #000;
  margin: 0 0 20px 0;
  text-decoration: none;
`;

export const Company = styled.p`
  color: #999;
  margin: 0;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
