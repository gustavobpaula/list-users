import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Name,
  Company,
  StyledLink,
} from './style';

export default function UserItem({
  id,
  name,
  address,
  company,
}) {
  return (
    <StyledLink to={`/user/${id}`}>
      <Card>
        <Name>{name}</Name>
        <Company>{company.name} | {address.city}</Company>
      </Card>
    </StyledLink>
  );
}

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
