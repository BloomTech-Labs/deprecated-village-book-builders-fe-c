import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';

import { Form, Input, DatePicker, Space, Radio } from 'antd';
import moment from 'moment';

import { editHeadmasterProfile, editMentor } from '../../../state/actions';
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../common/FormStyle';
import Button from '../../common/Button';
import { debugLog } from '../../../utils/debugMode';

let initialState = {
  first_name: '',
  last_name: '',
  gender: '',
  email: '',
  primary_language: '',
  dob: '',
  mentor_picture: '',
  english_lvl: '',
  math_lvl: '',
  reading_lvl: '',
  school_lvl: '',
  academic_description: '',
  support_needed: '',
};

const dateFormat = 'MM/DD/YYYY';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const timeFormat = 'HH:mm';
const genders = ['Male', 'Female', 'Other'];

const MentorForm = props => {
  const { editing, currentMentor, setShowModal } = props;
  const [formData, setFormData] = useState(
    editing ? currentMentor : initialState
  );
  const history = useHistory();
  const [form] = Form.useForm();

  // this converts gender from string to value to populate form when editing
  if (currentMentor.gender === 'Male') {
    currentMentor.gender = 0;
  } else if (currentMentor.gender === 'Female') {
    currentMentor.gender = 1;
  } else {
    currentMentor.gender = 2;
  }

  // this converts dob to populate form when editing
  let dobData = currentMentor.dob.split('T');
  currentMentor.dob = dobData[0];

  // this sets the form data to the current mentee card headmaster is editing
  useEffect(() => {
    if (editing) {
      setFormData(currentMentor);
    } else {
      setFormData(initialState);
    }
  }, [editing]);

  //   edit functionality is not currently working, the Db is returning a 500 error, I believe it has something to do with including the dynamic questions in the body of the put reqeust but this will need further investigation.
  const handleSubmit = async () => {
    let jsonified = formData;
    jsonified.dynamic_questions = JSON.stringify(formData.dynamic_questions);
    debugLog(formData);
    props.editMentor(formData.id, jsonified);
    setShowModal(false);
    history.push('/mentor-advisor');
  };

  const handleChange = e => {
    // debugLog(e);
    if (moment.isMoment(e)) {
      setFormData({ ...formData, dob: moment.utc(e).format() });
      debugLog(moment.utc(e).format());
    } else if (e.target.name == 'gender') {
      setFormData({ ...formData, gender: genders[e.target.value] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <FormContainer>
      <Form.Item {...tailLayout}></Form.Item>
      <Form
        onFinish={handleSubmit}
        form={form}
        {...layout}
        //   instead of using defaultValue, we need to use initialValues for controlled inputs
        initialValues={{
          first_name: props.currentMentor.first_name,
          last_name: props.currentMentor.last_name,
          email: props.currentMentor.email,
          primary_language: props.currentMentor.primary_language,
          gender: props.currentMentor.gender,
          mentee_picture: props.currentMentor.mentor_picture,
          english_lvl: props.currentMentor.english_lvl,
          math_lvl: props.currentMentor.math_lvl,
          reading_lvl: props.currentMentor.reading_lvl,
          school_lvl: props.currentMentor.school_lvl,
          academic_description: props.currentMentor.academic_description,
          support_needed: props.currentMentor.support_needed,
        }}
      >
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
        >
          <Input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last Name is required.' }]}
        >
          <Input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: 'email is required.' }]}
        >
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Primary Language"
          name="primary_language"
          rules={[{ required: true, message: 'Phone Number is required.' }]}
        >
          <Input
            type="text"
            name="primary_language"
            value={formData.primary_language}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Radio.Group
            name="gender"
            value={formData.gender}
            onChange={e => handleChange(e)}
          >
            <Radio value={0}>Male</Radio>
            <Radio value={1}>Female</Radio>
            <Radio value={2}>Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Picture URL"
          name="mentee_picture"
          rules={[{ required: true, message: 'Bio is required.' }]}
        >
          <Input
            type="text"
            name="mentee_picture"
            value={formData.mentee_picture}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="English Level"
          name="english_lvl"
          rules={[{ required: true, message: 'english level is required.' }]}
        >
          <Input
            type="text"
            name="english_lvl"
            value={formData.english_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Math Level"
          name="math_lvl"
          rules={[{ required: true, message: 'Math level is required.' }]}
        >
          <Input
            type="text"
            name="math_lvl"
            value={formData.math_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Reading Level"
          name="reading_lvl"
          rules={[{ required: true, message: 'reading level is required.' }]}
        >
          <Input
            type="text"
            name="reading_lvl"
            value={formData.reading_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="school Level"
          name="school_lvl"
          rules={[{ required: true, message: 'school level is required.' }]}
        >
          <Input
            type="text"
            name="school_lvl"
            value={formData.school_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Academic Description"
          name="academic_description"
          rules={[
            {
              required: true,
              message: 'academic description level is required.',
            },
          ]}
        >
          <Input
            type="text"
            name="academic_description"
            value={formData.academic_description}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Support Needed"
          name="support_needed"
          rules={[
            { required: true, message: 'Support needed level is required.' },
          ]}
        >
          <Input
            type="text"
            name="support_needed"
            value={formData.support_needed}
            // defaultValue={formData.support_needed}
            onChange={e => handleChange(e)}
          />
        </Form.Item>
        {/* this field is breaking edit functionality, will require additional research */}
        {/* <Form.Item
          label="General Availability"
          name="general_availability"
          rules={[
            { required: true, message: 'General Availability is required' },
          ]}
        >
          <Input
            type="text"
            name="general_availability"
            value={formData.availability}
            defaultValue={formData.availability}
            onChange={e => handleChange(e)}
          />
        </Form.Item> */}

        <Form.Item {...tailLayout}>
          <Button
            className="l2-btn btn"
            htmlType="submit"
            buttonText="Submit Village Edit"
          />
          <Required id="requiredMsg">
            Fields with <span id="required">&#42;</span> are required.
          </Required>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default connect(null, { editHeadmasterProfile, editMentor })(MentorForm);
