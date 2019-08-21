import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem';
import Loading from '../Loading';
import NotFound from '../NotFound';

export default function Users() {
  const users = useSelector((state) => state.users);

  /**
   * Render Not Found component if users are null or empty
   *
   * @returns
   */
  function renderNotFound() {
    return ((users.data && users.data.length === 0) || users.error) && <NotFound />;
  }

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

      {renderNotFound()}
    </>
  );
}
