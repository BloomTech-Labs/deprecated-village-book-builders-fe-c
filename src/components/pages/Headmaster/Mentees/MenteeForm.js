import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import { Form, Input, DatePicker, Space, Radio } from 'antd';
import moment from 'moment';

import {
  editHeadmasterProfile,
  editMentee,
  addMentee,
} from '../../../../state/actions';
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle';
import Button from '../../../common/Button';
import { debugLog } from '../../../../utils/debugMode';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';

let initialState = {
  first_name: '',
  last_name: '',
  gender: '',
  email: '',
  primary_language: '',
  dob: '',
  mentee_picture: '',
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

const MenteeForm = props => {
  const { editing, currentMentee, setShowModal } = props;
  const [formData, setFormData] = useState(
    editing ? currentMentee : initialState
  );
  const pathname = useHistory().location.pathname;
  const history = useHistory();
  const params = useParams();
  const [form] = Form.useForm();

  console.log('sanity test 1', props);
  // this sets the form data to the current mentee card headmaster is editing
  useEffect(() => {
    if (editing) {
      axiosWithAuth()
        .get(`mentee/${currentMentee.id}`)
        .then(res => {
          console.log('sanity check 2', res.data);
          form.setFieldsValue(res.data);
          setFormData(res.data);
        })
        .catch(error => console.dir(error));
    } else {
      setFormData(initialState);
    }
  }, [editing]);

  // // this converts gender from string to value to populate form when editing
  // if (editing && currentMentee.gender === 'Male') {
  //   currentMentee.gender = 0;
  // } else if (editing && currentMentee.gender === 'Female') {
  //   currentMentee.gender = 1;
  // } else if (editing) {
  //   currentMentee.gender = 2;
  // }

  // // this converts dob to populate form when editing
  // if (editing) {
  //   let dobData = currentMentee.dob.split('T');
  //   currentMentee.dob = dobData[0];
  // }

  const handleSubmit = async () => {
    debugLog(formData);
    console.log('mentee form', formData.id, formData);
    if (editing) {
      props.editMentee(formData.id, formData);
      setShowModal(false);
    } else {
      addMentee(formData);
    }
    history.push('/mentees');
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
      <Form onFinish={handleSubmit} form={form} {...layout}>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required.' }]}
        >
          <Input
            type="text"
            name="first_name"
            value={formData.first_name.value}
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
        {/* <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[{ required: true, message: 'Date of Birth is required.' }]}
        >
          <DatePicker
            name="dob"
            onChange={e => handleChange(e)}
            defaultValue={moment(formData.dob, 'YYYY-MM-DD')}
            value={moment(formData.dob, 'YYYY-MM-DD')}
          />
        </Form.Item> */}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required.' }]}
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
          rules={[{ required: true, message: 'Primary language is required.' }]}
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
          rules={[{ required: true, message: 'Picture URL is required.' }]}
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
          rules={[{ required: true, message: 'English level is required.' }]}
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
          rules={[{ required: true, message: 'Reading level is required.' }]}
        >
          <Input
            type="text"
            name="reading_lvl"
            value={formData.reading_lvl}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="School Level"
          name="school_lvl"
          rules={[{ required: true, message: 'School level is required.' }]}
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
              message: 'Academic description level is required.',
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
            onChange={e => handleChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="General Availability"
          name="general_availability"
          rules={[
            { required: true, message: 'General Availability is required' },
          ]}
        >
          <Input
            type="text"
            name="general_availability"
            value={formData.general_availability}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Mentor Program Goals"
          name="goals_mentor_program"
          rules={[
            { required: true, message: 'Goals of mentor program is required.' },
          ]}
        >
          <Input
            type="text"
            value={formData.goals_mentor_program}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Personal Goals"
          name="goals_personal"
          rules={[{ required: true, message: 'Personal goals are required.' }]}
        >
          <Input
            type="text"
            value={formData.goals_personal}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="School Community Goals"
          name="goals_school_community"
          rules={[
            {
              required: true,
              message: 'Goals for schools community are required.',
            },
          ]}
        >
          <Input
            type="text"
            value={formData.goals_school_community}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          label="Mentor Advisor Point of Contact"
          name="mentor_advisor_point_of_contact"
          rules={[
            {
              required: true,
              message: 'Mentor advisor point of contact is required.',
            },
          ]}
        >
          <Input
            type="text"
            value={formData.mentor_advisor_point_of_contact}
            onChange={e => handleChange(e)}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            className="l2-btn btn"
            htmlType="submit"
            buttonText="Submit Mentee"
          />
          <Required id="requiredMsg">
            Fields with <span id="required">&#42;</span> are required.
          </Required>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default connect(null, { editHeadmasterProfile, editMentee })(MenteeForm);
