import styled from 'styled-components';

export const CardStyle = styled.article`
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

export const NameStyle = styled.h3`
  margin: 0;
`;

export const CompanyStyle = styled.p`
  margin: 0;
`;
