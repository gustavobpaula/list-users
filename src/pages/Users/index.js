import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListCard } from './style';
import UserList from '../../components/UserList';
import { fetchUsers, cleanStorePosts } from '../../store/actions';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);


  useEffect(() => {
    if (!users.data && !users.error) fetchUsers(dispatch);
    cleanStorePosts(dispatch);
  });

  return (
    <ListCard>
      <UserList />
    </ListCard>
  );
}
