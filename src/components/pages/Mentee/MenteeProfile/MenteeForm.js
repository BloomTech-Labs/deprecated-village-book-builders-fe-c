import React, { useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { ComponentTitles, Button } from '../../../common';
import { debugLog } from '../../../../utils/debugMode';
import data from './data.json';
import { Form, Input, Radio, DatePicker } from 'antd';
import moment from 'moment';
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../../common/FormStyle.js';

const MenteeEditForm = () => {
  let history = useHistory();
  const [formData, setFormData] = useState(data[0]);
  const [form] = Form.useForm();
  const params = useParams();

  const handleSubmit = event => {
    const id = params.id;
    console.log(formData);
  };

  const handleChange = event => {
    debugLog(formData);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log(formData.first_name);
  return (
    <div>
      <ComponentTitles titleText={'Edit Your Profile'} />
      <FormContainer>
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
              defaultValue={data[0].first_name}
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
              defaultValue={data[0].last_name}
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
              defaultValue={moment(`${data[0].dob}`)}
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
              defaultValue={data[0].email}
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
              defaultValue={data[0].primary_language}
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
              defaultValue={data[0].mentee_picture}
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
              defaultValue={data[0].english_lvl}
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
              defaultValue={data[0].math_lvl}
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
              defaultValue={data[0].reading_lvl}
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
              defaultValue={data[0].school_lvl}
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
              defaultValue={data[0].academic_description}
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
              defaultValue={data[0].support_needed}
              onChange={e => handleChange(e)}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Link to="/profile">
                <Button
                  className="l2-btn btn"
                  htmlType="button"
                  buttonText="Cancel"
                />
              </Link>
              <Button
                className="l2-btn btn"
                htmlType="submit"
                buttonText="Submit"
              />

              <Required id="requiredMsg">
                Fields with <span id="required">&#42;</span> are required.
              </Required>
            </div>
          </Form.Item>
        </Form>
      </FormContainer>
    </div>
  );
};

export default MenteeEditForm;
