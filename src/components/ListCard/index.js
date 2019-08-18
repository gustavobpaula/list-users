import React from 'react';
import { useSelector } from 'react-redux';
import { ListCardStyle } from './style';
import Card from '../Card';

export default function ListCard() {

  const users = useSelector((state) => state.users);

  return (
    <ListCardStyle>
      {users.map((user) => (
        <Card key={user.id} name={user.name} address={user.address} company={user.company} />
      ))}
    </ListCardStyle>
  );
}
