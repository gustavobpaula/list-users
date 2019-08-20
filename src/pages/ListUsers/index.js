import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListCard } from './style';
import Users from '../../components/Users';

export default function ListUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS_START' });
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((res) => {
      dispatch({ type: 'RECEIVE_USERS', payload: res });
    }).catch((err) => {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: err });
    });
  });

  return (
    <ListCard>
      <Users />
    </ListCard>
  );
}
