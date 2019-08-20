import React from 'react';
import PropTypes from 'prop-types';
import { Post, User, BoxTitle, Title, BoxDescription, Description } from './style';


export default function PostItem({ title, body, user, index }) {
  return (
    <Post>
      <BoxTitle className={index % 2 === 0 ? 'even' : ''}>
        <Title>{title}</Title>
        <User>{user && user.name} | {user && user.company && user.company.name}</User>
      </BoxTitle>
      <BoxDescription className={index % 2 === 0 ? 'even' : ''}>
        <Description>{body}</Description>
      </BoxDescription>
    </Post>
  );
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
};