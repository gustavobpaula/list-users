import React from 'react';
import loading from '../../images/load.gif';
import { LoadingStyle } from './style';


export default function Loading() {
  return (
    <LoadingStyle src={loading} alt="loading" />
  );
}
