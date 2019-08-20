import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import PostList from '../../components/PostList';

export default function UserPosts(props) {
  const { match } = props;
  const userId = match.params.id;
  const dispatch = useDispatch();


  function getPosts() {
    dispatch({
      type: 'FETCH_POSTS',
      meta: 'posts',
      payload: fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => res.json()),
    });
  }

  function getUser() {
    dispatch({
      type: 'FETCH_USER',
      meta: 'user',
      payload: fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json()),
    });
  }


  useEffect(() => {
    getPosts();
    getUser();
  });

  return (
    <PostList />
  );
}

UserPosts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
