import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListCard } from './style';
import UserList from '../../components/UserList';

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
      payload: null,
    });
  }

  useEffect(() => {
    if (!users.data && !users.error) fetchUsers();
    cleanStorePosts();
  });

  return (
    <ListCard>
      <UserList />
    </ListCard>
  );
}
