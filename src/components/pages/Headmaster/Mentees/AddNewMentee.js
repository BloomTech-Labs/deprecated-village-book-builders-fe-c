import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function AddNewMentee(props) {
  const [visible, setVisible] = useState(false);

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <Button
        style={{ width: '80%', marginBottom: '10pt', alignSelf: 'center' }}
        align="center"
        onClick={() => alert('hi')}
      >
        <PlusOutlined /> Add New Student
      </Button>
    </>
  );
}
