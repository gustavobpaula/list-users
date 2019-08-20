import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListCard } from './style';
import Users from '../../components/Users';

export default function ListUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  function fetchUsers() {
    dispatch({
      type: 'FETCH_USERS',
      meta: 'users',
      payload: fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
    });
  }

  function cleanStorePosts() {
    dispatch({
      type: 'FETCH_POSTS_FULFILLED',
      meta: 'posts',
      payload: [],
    });
  }

  useEffect(() => {
    if (users.data.length === 0) fetchUsers();
    cleanStorePosts();
  });

  return (
    <ListCard>
      <Users />
    </ListCard>
  );
}
