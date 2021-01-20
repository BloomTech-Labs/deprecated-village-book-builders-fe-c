import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import { Form, Input, DatePicker, Space, Radio } from 'antd';
import moment from 'moment';

import { editStudentProfile } from '../../../../state/actions/studentActions';
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle';
import Button from '../../../common/Button';
import { debugLog } from '../../../../utils/debugMode';

const baseURL = 'https://cors-anywhere.herokuapp.com/http://54.158.134.245/api';
// unusued for now, but will be implmeneted when endpoint is used
const initialState = {
  id: 0,
  first_name: '',
  last_name: '',
  gender: '',
  email: '',
  primary_language: '',
  dob: '',
  mentee_picture: '',
  english_lvl: 0,
  math_lvl: 0,
  reading_lvl: 0,
  school_lvl: 0,
  academic_description: '',
  support_needed: '',
  availability: {
    time_zone: '',
    as_early_as: '',
    as_late_as: '',
    methods: [],
  },
  dynamic_questions: [],
};

const dateFormat = 'MM/DD/YYYY';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const ProfileForm = props => {
  const [formData, setFormData] = useState(props.studentProfile);
  const [value, setValue] = useState(1);
  const pathname = useHistory().location.pathname;
  const params = useParams().id;
  const [form] = Form.useForm();

  // useEffect(() => {
  //   axios // ! This should later become available through axiosWithAuth() only once we figure out the Auth with Stakeholder's backend
  //     .get(`${baseURL}/headmaster/mentee/1`)
  //     .then(res => {
  //       form.setFieldsValue(res.data);
  //       setFormData(res.data);
  //     })
  //     .catch(err => console.dir(err));
  // }, [form]);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(formData);
    props.editStudentProfile(params, formData);
  };

  const handleChange = e => {
    debugLog(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <Form.Item {...tailLayout}>
        <Link to="/profile">Go Back to your Profile</Link>
      </Form.Item>
      <Form onFinish={handleSubmit} form={form} {...layout}>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
        >
          <Input
            type="text"
            name="first_name"
            value={formData.first_name}
            defaultValue={formData.first_name}
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
            defaultValue={formData.last_name}
            onChange={e => handleChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Date of Birth is required.' }]}
        >
          <DatePicker
            name="dob"
            onChange={e => handleChange(e)}
            defaultValue={moment(`${formData.dob}`)}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'email is required.' }]}
        >
          <Input
            type="text"
            name="email"
            value={formData.email}
            defaultValue={formData.email}
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
            defaultValue={formData.primary_language}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Radio.Group
            name="gender"
            value={formData.gender}
            defaultValue={1}
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
            defaultValue={formData.mentee_picture}
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
            defaultValue={formData.english_lvl}
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
            defaultValue={formData.math_lvl}
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
            defaultValue={formData.reading_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="School Level"
          name="school_lvl"
          rules={[{ required: true, message: 'school level is required.' }]}
        >
          <Input
            type="text"
            name="school_lvl"
            value={formData.school_lvl}
            defaultValue={formData.school_lvl}
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
            defaultValue={formData.academic_description}
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
            defaultValue={formData.support_needed}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

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
const mapStateToProps = state => {
  return {
    studentProfile: state.studentReducer.studentProfile,
  };
};

export default connect(mapStateToProps, { editStudentProfile })(ProfileForm);
