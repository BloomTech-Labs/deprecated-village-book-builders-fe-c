import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form, Input, Select } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
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
  const { btnStyle } = props;
  const [libraryUsers, setLibraryUsers] = useState(null);
  const [visible, setVisible] = useState(false);
  const [modalContentType, setModalContentType] = useState('library');
  const [menteeForm, setMenteeForm] = useState(userForm);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  // const onSubmitForm = (form) => {
  //   const { first_name, last_name, email, }
  // }

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
      .get('/mentee')
      .then(res => {
        const mentees = res.data;
        setLibraryUsers(mentees.filter(mentee => !mentee.active));
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

  const onFormSubmit = () => {
    const {
      first_name,
      last_name,
      email,
      primary_language,
      school_lvl,
      password,
      subjects,
      home_country,
      time_zone,
      secondary_language,
    } = menteeForm;
    const dob = new Date(
      `${menteeForm['dob_year']}-${menteeForm['dob_month']}-${menteeForm['dob_day']}`
    );
    const phone = `${userForm['phone_code']}-${userForm['phone']}`;

    const cleanedUser = {
      // For User role in Database
      email,
      password,
      role: 'mentee',
    };

    const cleanedMentee = {
      // For Mentee role in Database
      active: true,
      first_name,
      last_name,
      email,
      dob,
      primary_language,
      secondary_language, // We need to make a new column in Database, as requested by Stakeholder
      school_lvl,
      phone, // We need to make a new column in Database, as requested by Stakeholder
      subjects, // We need to make a new column in Database, as requested by Stakeholder
      home_country, // We need to make a new column in Database, as requested by Stakeholder
      time_zone, // We need to make a new column in Database, as requested by Stakeholder
    };

    alert('ON SUBMIT GOES HERE');
  };

  const onFormChange = evt => {
    // onChange when HeadMaster is editing a User with a Library Role
    const { name, value } = evt.target;
    if (name === 'phone_code') {
      setMenteeForm({ ...menteeForm, [name]: `+${value}` });
    } else {
      setMenteeForm({ ...menteeForm, [name]: value });
    }
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
      <Button style={btnStyle} align="center" onClick={onBtnClick}>
        <PlusCircleOutlined /> Add New Student
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
            onFormSubmit={onFormSubmit}
          />
        )}
      </Modal>
    </>
  );
}
