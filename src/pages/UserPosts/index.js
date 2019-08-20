import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Posts from '../../components/Posts';

export default function UserPosts(props) {
  const { match } = props;
  const userId = match.params.id;
  const dispatch = useDispatch();


  function getPosts() {
    dispatch({ type: 'FETCH_POSTS_START' });
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => res.json()).then((res) => {
      dispatch({ type: 'RECEIVE_POSTS', payload: res });
    }).catch((err) => {
      dispatch({ type: 'FETCH_POSTS_ERROR', payload: err });
    });
  }

  function getUser() {
    dispatch({ type: 'FETCH_USER_START' });
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json()).then((res) => {
      dispatch({ type: 'RECEIVE_USER', payload: res });
    }).catch((err) => {
      dispatch({ type: 'FETCH_USER_ERROR', payload: err });
    });
  }


  useEffect(() => {
    getPosts();
    getUser();
  });

  return (
    <Posts />
  );
}

UserPosts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
