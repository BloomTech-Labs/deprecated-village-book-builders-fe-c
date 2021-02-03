import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';

import ModalLibraryUsers from './ModalLibraryUsers';
import AddNewMenteeForm from './AddNewMenteeForm';

const userForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone_code: '',
  phone: '', // Need to update Mentee DB columns
  subjects: [], // Need to update Mentee DB columns
  home_country: '', // Need to update Mentee DB columns
  time_zone: '', // Need to update Mentee DB columns
  primary_language: '',
  secondary_language: [], // Need to update Mentee DB columns
  school_lvl: '',
  dob_year: '',
  dob_month: '',
  dob_day: '',
  password: '',
  confirmPass: '',
};

export default function AddNewMentee(props) {
  const [libraryUsers, setLibraryUsers] = useState(null);
  const [visible, setVisible] = useState(false);
  const [modalContentType, setModalContentType] = useState('library');
  const [menteeForm, setMenteeForm] = useState(userForm);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const onBtnClick = () => {
    // When HeadMaster clicks "Add New Mentee"
    setModalContentType('library');
    openModal();
  };

  const onCloseBtnClick = () => {
    closeModal();
    setMenteeForm(userForm);
  };

  useEffect(() => {
    axiosWithAuth()
      .get('/users/library')
      .then(res => {
        setLibraryUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setLibraryUsers]);

  const onUserClick = email => {
    // When the modalContentType is set to "Library" and they click who to turn into a Mentee
    setMenteeForm({ ...menteeForm, email });
    setModalContentType('form');
  };

  const onFormChange = evt => {
    // onChange when HeadMaster is editing a User with a Library Role
    const { name, value } = evt.target;
    setMenteeForm({ ...menteeForm, [name]: value });
  };

  const onSelectChange = (val, name) => {
    setMenteeForm({ ...menteeForm, [name]: val });
  };

  const footerButtons = [
    [<Button key="close">Close</Button>],
    [
      <Button key="cancel" onClick={closeModal}>
        Cancel
      </Button>,
      <Button form="newMentee" htmlType="submit" key="submit" type="primary">
        Submit
      </Button>,
    ],
  ];

  return (
    <>
      <Button
        style={{ width: '80%', marginBottom: '10pt', alignSelf: 'center' }}
        align="center"
        onClick={onBtnClick}
      >
        <PlusOutlined /> Add New Student
      </Button>
      <Modal
        title="Add New Student"
        visible={visible}
        onCancel={onCloseBtnClick}
        footer={
          modalContentType === 'library' ? footerButtons[0] : footerButtons[1]
        }
        width={900}
      >
        {modalContentType === 'library' && (
          <ModalLibraryUsers users={libraryUsers} onUserClick={onUserClick} />
        )}
        {modalContentType === 'form' && (
          <AddNewMenteeForm
            form={menteeForm}
            onFormChange={onFormChange}
            onSelectChange={onSelectChange}
          />
        )}
      </Modal>
    </>
  );
}
