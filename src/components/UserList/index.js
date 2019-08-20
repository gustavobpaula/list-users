import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem';
import Loading from '../Loading';

export default function Users() {
  const users = useSelector((state) => state.users);


  return (
    <>
      {users.fetching ? (
        <Loading />
      ) : users.data.map((user) => (
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
