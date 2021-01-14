import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ComponentTitle, Button } from '../../common/';
import { debugLog } from '../../../utils/debugMode';
import { Form, Input } from 'antd';
import { layout, FormContainer, tailLayout } from '../../common/FormStyle';

const TeacherEditProfile = props => {
  const initialFormValues = {
    name: '',
    contact: '',
    bio: '',
    education: '',
    location: '',
    subjects: '',
    funFact: '',
  };
  const [formData, setFormData] = useState(initialFormValues);
  const [form] = Form.useForm();
  const params = useParams();

  const handleSubmit = event => {
    const id = params.id;
    //editTeacherProfile(id, formData)
  };

  const handleChange = event => {
    debugLog(formData);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <ComponentTitle titleText={'Edit Teacher Profile'} />
      <FormContainer>
        <Form.item {...tailLayout}>
          <Link to="/teacher">Go Back to your Profile</Link>
        </Form.item>
        <Form onFinish={handleSubmit} form={form} {...layout}>
          <Form.item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Name is required.' }]}
          >
            <Input
              type="text"
              name="name"
              defaultValue="Teacher"
              value={initialFormValues.name}
              onChange={event => handleChange(event)}
            />
          </Form.item>
          <Form.item
            label="Contact"
            name="contact"
            rules={[
              {
                required: true,
                message: 'Contact such as email or phone number is required.',
              },
            ]}
          >
            <Input
              type="text"
              name="contact"
              defaultValue="teacher@teacher.com"
              value={initialFormValues.contact}
              onChange={event => handleChange(event)}
            />
          </Form.item>
          <Form.item
            label="Bio"
            name="bio"
            rules={[
              {
                required: true,
                message: 'Introduce yourself in 2-3 sentences.',
              },
            ]}
          >
            <Input
              type="text"
              name="bio"
              defaultValue="Insert Teacher Bio"
              value={initialFormValues.bio}
              onChange={event => handleChange(event)}
            />
          </Form.item>
          <Form.item
            label="Education"
            name="education"
            rules={[
              {
                required: true,
                message: 'Include degrees, school, and graduating year',
              },
            ]}
          >
            <Input
              type="text"
              name="education"
              defaultValue="Insert Education"
              value={initialFormValues.education}
              onChange={event => handleChange(event)}
            />
          </Form.item>
          <Form.item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Where do you teach' }]}
          >
            <Input
              type="text"
              name="location"
              defaultValue="Lincoln, Nebraska"
              value={initialFormValues.location}
              onChange={event => handleChange(event)}
            />
          </Form.item>
          <Form.item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Where do you teach' }]}
          >
            <Input
              type="text"
              name="location"
              defaultValue="Lincoln, Nebraska"
              value={initialFormValues.location}
              onChange={event => handleChange(event)}
            />
          </Form.item>
          <Form.item
            label="Subjects"
            name="subjects"
            rules={[{ required: true, message: 'What do you teach' }]}
          >
            <Input
              type="text"
              name="subjects"
              defaultValue="Geometry, Biology"
              value={initialFormValues.subjects}
              onChange={event => handleChange(event)}
            />
          </Form.item>
          <Form.item
            label="Fun Fact"
            name="fun_fact"
            rules={[
              { required: true, message: `What's a fun face about you?` },
            ]}
          >
            <Input
              type="text"
              name="fun_fact"
              defaultValue="I like spaghetti"
              value={initialFormValues.funFact}
              onChange={event => handleChange(event)}
            />
          </Form.item>
          <Button
            classType={'save-changes-button'}
            buttonText={'Save Changes'}
          />
        </Form>
      </FormContainer>
    </div>
  );
};

export default TeacherEditProfile;
