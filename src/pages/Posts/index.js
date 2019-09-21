import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import PostList from '../../components/PostList';
import { getPosts, getUser } from '../../store/actions';

export default function Posts(props) {
  const { match } = props;
  const userId = match.params.id;
  const dispatch = useDispatch();


  useEffect(() => {
    getPosts(userId, dispatch);
    getUser(userId, dispatch);
  });

  return (
    <PostList />
  );
}

Posts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
