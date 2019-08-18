import React from 'react';
import ListCard from './components/ListCard';
import { Container, GlobalStyle } from './styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <ListCard />
      </Container>
    </div>
  );
}

export default App;
