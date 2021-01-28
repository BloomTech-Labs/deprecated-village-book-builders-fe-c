import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

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

export default function AddNewMentee(props) {
  const [visible, setVisible] = useState(false);
  const [langs, setLangs] = useState(langOptions);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  return (
    <>
      <Button
        style={{ width: '80%', marginBottom: '10pt', alignSelf: 'center' }}
        align="center"
        onClick={openModal}
      >
        <PlusOutlined /> Add New Student
      </Button>
      <Modal
        title="Add new Student"
        visible={visible}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary">
            Submit
          </Button>,
        ]}
        width={900}
      >
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
            <Col span={24}>
              <Form.Item name="email" label="Email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="primaryLang" label="Primary Language">
                <Select placeholder="Primary Language" options={langs} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="secondaryLang" label="Secondary Language">
                <Select placeholder="Secondary Language" options={langs} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="grade" label="School Grade">
                <Select options={gradeLevels} />
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
      </Modal>
    </>
  );
}
