import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListCard } from './style';
import Users from '../../components/Users';

export default function ListUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_USERS',
      meta: 'users',
      payload: fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
    });
  });

  return (
    <ListCard>
      <Users />
    </ListCard>
  );
}
