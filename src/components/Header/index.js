import React from 'react';
import { HeaderStyle, LinkStyle } from './style';


export default function Header() {
  return (
    <HeaderStyle>
      <h1><LinkStyle to="/">Lorem Ipsum</LinkStyle></h1>
    </HeaderStyle>
  );
}
