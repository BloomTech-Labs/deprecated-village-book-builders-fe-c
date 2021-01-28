import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTeacherProfile } from '../../../state/actions/teacherActions';
import { useParams, Link, useHistory } from 'react-router-dom';
import { ComponentTitles, Button } from '../../common/';
import { debugLog } from '../../../utils/debugMode';
import { Form, Input } from 'antd';
import {
  layout,
  FormContainer,
  tailLayout,
  Required,
} from '../../common/FormStyle';

const TeacherEditProfile = props => {
  const { editTeacherProfile } = props;
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [form] = Form.useForm();
  const params = useParams();

  const handleSubmit = async event => {
    if (formData.other_languages) {
      formData.other_languages = formData.other_languages.split(',');
    }
    if (formData.subjects) {
      formData.subjects = formData.subjects.split(',');
    }
    await editTeacherProfile(params.id, formData);
    history.push(`/teacher/${params.id}`);
  };

  const handleChange = event => {
    debugLog(formData);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <ComponentTitles titleText={'Edit Teacher Profile'} />
      <FormContainer>
        <Form.Item {...tailLayout}>
          <Link to={`/teacher/${params.id}`}>Go Back to your Profile</Link>
        </Form.Item>
        <Form onFinish={handleSubmit} form={form} {...layout}>
          <Form.Item label="First Name" name="firstName">
            <Input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Phone Number" name="phone">
            <Input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Input
              type="gender"
              name="gender"
              value={formData.gender}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Subjects" name="subjects">
            <Input
              type="text"
              name="subjects"
              value={formData.subjects}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Home City" name="homeCity">
            <Input
              type="text"
              name="home_city"
              value={formData.home_city}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Home Country" name="homeCountry">
            <Input
              type="text"
              name="home_country"
              value={formData.home_country}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Education" name="education">
            <Input
              type="text"
              name="highest_degree"
              value={formData.highest_degree}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="First Language" name="firstLanguage">
            <Input
              type="text"
              name="first_language"
              value={formData.first_language}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Other Languages" name="other_languages">
            <Input
              type="text"
              name="other_languages"
              value={formData.other_languages}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Time Zone" name="timeZone">
            <Input
              type="text"
              name="home_timezone"
              value={formData.home_timezone}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item label="Current Classroom" name="currentClassroom">
            <Input
              type="text"
              name="current_classroom"
              value={formData.current_classroom}
              onChange={event => handleChange(event)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              classType={'save-changes-button'}
              buttonText={'Save Changes'}
            />
            <Required id="requiredMsg">
              Fields with <span id="required">&#42;</span> are required.
            </Required>
          </Form.Item>
        </Form>
      </FormContainer>
    </div>
  );
};

export default connect(null, { editTeacherProfile })(TeacherEditProfile);
