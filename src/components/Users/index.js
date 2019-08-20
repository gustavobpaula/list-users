import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem';

export default function Users() {
  const users = useSelector((state) => state.users);


  return (
    <>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          address={user.address}
          company={user.company}
        />
      ))}
    </>
  );
}
