import React from 'react';
import { Button } from 'antd';

export default function ModalLibraryUsers(props) {
  const { users, onUserClick } = props;
  return (
    <>
      {users.map(usr => {
        return (
          <Button onClick={() => onUserClick(usr.email)}>{usr.email}</Button>
        );
      })}
    </>
  );
}
