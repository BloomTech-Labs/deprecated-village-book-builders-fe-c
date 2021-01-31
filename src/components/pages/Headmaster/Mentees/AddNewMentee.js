import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';

const gradeLevels = [
  { label: 'Kindergarten', value: 'k' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
];

const langOptions = [
  { label: 'Interlingue', value: 'Interlingue' },
  { label: 'Turkish', value: 'Turkish' },
  { label: 'Tonga (Tonga Islands)', value: 'Tonga (Tonga Islands)' },
  { label: 'Urdu', value: 'Urdu' },
  { label: 'Gaelic, Scottish Gaelic', value: 'Gaelic, Scottish Gaelic' },
  { label: 'Panjabi, Punjabi', value: 'Panjabi, Punjabi' },
  { label: 'Albanian', value: 'Albanian' },
  { label: 'Javanese', value: 'Javanese' },
  { label: 'Bislama', value: 'Bislama' },
  { label: 'Zhuang, Chuang', value: 'Zhuang, Chuang' },
  { label: 'Solvenian', value: 'Solvenian' },
  { label: 'Arabic', value: 'Arabic' },
  { label: 'Pali', value: 'Pali' },
  { label: 'Kurdish', value: 'Kurdish' },
  { label: 'Maori', value: 'Maori' },
  { label: 'Aragonese', value: 'Aragonese' },
  { label: 'Luba-Katanga', value: 'Luba-Katanga' },
  { label: 'Venda', value: 'Venda' },
  { label: 'Hebrew', value: 'Hebrew' },
  { label: 'Walloon', value: 'Walloon' },
  { label: 'Romansh', value: 'Romansh' },
  { label: 'Burmese', value: 'Burmese' },
  { label: 'Bambara', value: 'Bambara' },
  { label: 'Northern Sami', value: 'Northern Sami' },
  { label: 'Sinhala, Sinhalese', value: 'Sinhala, Sinhalese' },
  { label: 'Kazakh', value: 'Kazakh' },
  { label: 'Amharic', value: 'Amharic' },
  { label: 'Azerbaijani', value: 'Azerbaijani' },
  { label: 'Russian', value: 'Russian' },
  { label: 'Igbo', value: 'Igbo' },
  { label: 'South Ndebele', value: 'South Ndebele' },
  { label: 'Esperanto', value: 'Esperanto' },
  { label: 'Norwegian', value: 'Norwegian' },
  { label: 'Swedish', value: 'Swedish' },
  { label: 'Indonesian', value: 'Indonesian' },
  { label: 'Belarusian', value: 'Belarusian' },
  { label: 'Norwegian Bokmål', value: 'Norwegian Bokmål' },
  { label: 'Oromo', value: 'Oromo' },
  { label: 'Wolof', value: 'Wolof' },
  { label: 'Tigrinya', value: 'Tigrinya' },
  { label: 'Nauru', value: 'Nauru' },
  { label: 'Hindi', value: 'Hindi' },
  { label: 'Lithuanian', value: 'Lithuanian' },
  { label: 'English', value: 'English' },
  { label: 'Afar', value: 'Afar' },
  { label: 'Assamese', value: 'Assamese' },
  { label: 'Guarani', value: 'Guarani' },
  { label: 'Lao', value: 'Lao' },
];

const subjects = ['Math', 'English', 'History', 'Science', 'Geography'];

const timeZones = [
  { label: 'UTC-11', value: 'UTC-11' },
  { label: 'UTC-10', value: 'UTC-10' },
  { label: 'UTC-9', value: 'UTC-9' },
  { label: 'UTC-9:30', value: 'UTC-9:30' },
  { label: 'UTC-8', value: 'UTC-8' },
  { label: 'UTC-7', value: 'UTC-7' },
  { label: 'UTC-6', value: 'UTC-6' },
  { label: 'UTC-5', value: 'UTC-5' },
  { label: 'UTC-4', value: 'UTC-4' },
  { label: 'UTC-3', value: 'UTC-3' },
  { label: 'UTC-3:30', value: 'UTC-3:30' },
  { label: 'UTC-2', value: 'UTC-2' },
  { label: 'UTC-1', value: 'UTC-1' },
  { label: 'UTC+0', value: 'UTC+0' },
  { label: 'UTC+1', value: 'UTC+1' },
  { label: 'UTC+2', value: 'UTC+2' },
  { label: 'UTC+3', value: 'UTC+3' },
  { label: 'UTC+3:30', value: 'UTC+3:30' },
  { label: 'UTC+4', value: 'UTC+4' },
  { label: 'UTC+4:30', value: 'UTC+4:30' },
  { label: 'UTC+5', value: 'UTC+5' },
  { label: 'UTC+5:30', value: 'UTC+5:30' },
  { label: 'UTC+5:45', value: 'UTC+5:45' },
  { label: 'UTC+6:30', value: 'UTC+6:30' },
  { label: 'UTC+7', value: 'UTC+7' },
  { label: 'UTC+8', value: 'UTC+8' },
  { label: 'UTC+8:45', value: 'UTC+8:45' },
  { label: 'UTC+9', value: 'UTC+9' },
  { label: 'UTC+9:30', value: 'UTC+9:30' },
  { label: 'UTC+10', value: 'UTC+10' },
  { label: 'UTC+10:30', value: 'UTC+10:30' },
  { label: 'UTC+11', value: 'UTC+11' },
  { label: 'UTC+12', value: 'UTC+12' },
  { label: 'UTC+12:45', value: 'UTC+12:45' },
  { label: 'UTC+13', value: 'UTC+13' },
  { label: 'UTC+14', value: 'UTC+14' },
];

const userForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '', // Need to update Mentee DB columns
  subjects: [], // Need to update Mentee DB columns
  home_country: '', // Need to update Mentee DB columns
  time_zone: '', // Need to update Mentee DB columns
  primary_language: '',
  secondary_language: [], // Need to update Mentee DB columns
  school_lvl: '',
  dob: '',
};

export default function AddNewMentee(props) {
  const [visible, setVisible] = useState(false);
  const [libraryUsers, setLibraryUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editUserForm, setEditUserForm] = useState(null);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const [modalContent, setModalContent] = useState({
    title: 'Loading',
    footer: [
      <Button key="close" onClick={closeModal}>
        Close
      </Button>,
    ],
    content: 'Loading users...',
  });

  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()
      .get(`/users/library`)
      .then(res => {
        setLibraryUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setLibraryUsers]);

  const loadLibraryUsers = () => {
    setIsLoading(true);
    openModal();
    displayContent();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const onLibraryUserClick = (user, content) => {
    const { email } = user;
    setEditUserForm({ email, ...user });
    setModalContent(content);
  };

  const displayContent = () => {
    if (!libraryUsers || !libraryUsers.length) {
      setModalContent({
        footer: [<Button key="close">Close</Button>],
        content: 'No users found.',
      });
    } else {
      const content = [
        {
          footer: [
            <Button key="close" onClick={closeModal}>
              Close
            </Button>,
          ],
          content: libraryUsers.map(user => {
            return (
              <Button onClick={() => onLibraryUserClick(user, content[1])}>
                {user.email}
              </Button>
            );
          }),
        },
        {
          footer: [
            <Button key="cancel" onClick={closeModal}>
              Cancel
            </Button>,
            <Button key="submit" type="primary">
              Submit
            </Button>,
          ],
          content: (
            <Form layout="vertical" size="large">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="name" label="Name">
                    <Input placeholder="First Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="name" label=" ">
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="email" label="Email">
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="phone" label="Phone">
                    <Input placeholder="Phone#" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item name="subjects" label="Subjects">
                    <Select mode="multiple" placeholder="Subjects">
                      {subjects.map(sub => {
                        return <Select.Option value={sub}>{sub}</Select.Option>;
                      })}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="homeCountry" label="Home Country">
                    <Input placeholder="Country" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="homeTimeZone" label="Time Zone">
                    <Select placeholder="TimeZone">
                      {timeZones.map(zone => {
                        return (
                          <Select.Option value={zone.value}>
                            {zone.label}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="primaryLang" label="Primary Language">
                    <Select
                      placeholder="Primary Language"
                      options={langOptions}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="secondaryLang" label="Secondary Language">
                    <Select mode="multiple" placeholder="Secondary Language">
                      {langOptions.map(lang => {
                        return (
                          <Select.Option value={lang.value}>
                            {lang.label}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="grade" label="School Grade">
                    <Select placeholder="School Grade" options={gradeLevels} />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item name="dateOfBirth" label="Date of Birth">
                    <Input placeholder="Year" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item name="dateOfBirth" label=" ">
                    <Input placeholder="Month" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item name="dateOfBirth" label=" ">
                    <Input placeholder="Day" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="password" label="Password">
                    <Input type="password" placeholder="Password" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="confirmPass" label="ConfirmPassword">
                    <Input type="password" placeholder="Confirm Password" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          ),
        },
      ];

      setModalContent(content[0]);
    }
  };

  return (
    <>
      <Button
        style={{ width: '80%', marginBottom: '10pt', alignSelf: 'center' }}
        align="center"
        onClick={loadLibraryUsers}
      >
        <PlusOutlined /> Add New Student
      </Button>
      <Modal
        title="Add New Student"
        visible={visible}
        onCancel={closeModal}
        footer={modalContent.footer}
        width={900}
      >
        {isLoading ? 'LOADING...' : modalContent.content}
      </Modal>
    </>
  );
}
