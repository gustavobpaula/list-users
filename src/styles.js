import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
