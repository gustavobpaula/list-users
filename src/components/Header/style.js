import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyle = styled.header`
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;
  padding: 20px 0;
  text-align: center;
`;

export const LinkStyle = styled(Link)`
  color: #333;
  font-size: 50px;
  text-decoration: none;

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;
