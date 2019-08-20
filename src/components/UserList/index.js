import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem';
import Loading from '../Loading';
import NotFound from '../NotFound';

export default function Users() {
  const users = useSelector((state) => state.users);


  return (
    <>
      {users.fetching ? (
        <Loading />
      ) : users.data && users.data.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          address={user.address}
          company={user.company}
        />
      ))}

      {((users.data && users.data.length === 0) || users.error) && <NotFound />}
    </>
  );
}
