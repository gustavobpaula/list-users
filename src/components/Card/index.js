import React from 'react';
import PropTypes from 'prop-types';
import { CardStyle, NameStyle, CompanyStyle } from './style';

export default function Card({ name, address, company }) {
  return (
    <CardStyle>
      <NameStyle>{name}</NameStyle>
      <CompanyStyle>{company.name} - {address.city}</CompanyStyle>
    </CardStyle>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
