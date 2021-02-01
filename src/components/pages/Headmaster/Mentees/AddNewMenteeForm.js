import React from 'react';
import { Form, Input, Row, Col, Select } from 'antd';

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

export default function AddNewMenteeForm(props) {
  const { form, onFormChange, onSelectChange } = props;

  return (
    <Form layout="vertical" size="large" initialValues={{ email: form.email }}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Name">
            <Input
              name="first_name"
              placeholder="First Name"
              value={form['first_name']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label=" ">
            <Input
              name="last_name"
              placeholder="Last Name"
              value={form['last_name']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="email" label="Email">
            <Input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="phone" label="Phone">
            <Input
              name="phone"
              value={form.phone}
              placeholder="Phone#"
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="subjects" label="Subjects">
            <Select
              name="subjects"
              mode="multiple"
              placeholder="Subjects"
              onChange={val => onSelectChange(val, 'subjects')}
            >
              {subjects.map((sub, i) => {
                return (
                  <Select.Option key={i} value={sub}>
                    {sub}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="homeCountry" label="Home Country">
            <Input
              placeholder="Country"
              name="home_country"
              value={form['home_country']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="homeTimeZone" label="Time Zone">
            <Select
              placeholder="TimeZone"
              onChange={val => onSelectChange(val, 'time_zone')}
            >
              {timeZones.map((zone, i) => {
                return (
                  <Select.Option key={i} value={zone.value}>
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
              onChange={val => onSelectChange(val, 'primary_language')}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="secondaryLang" label="Secondary Language">
            <Select
              mode="multiple"
              placeholder="Secondary Language"
              onChange={val => onSelectChange(val, 'secondary_language')}
            >
              {langOptions.map((lang, i) => {
                return (
                  <Select.Option key={i} value={lang.value}>
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
            <Select
              placeholder="School Grade"
              options={gradeLevels}
              onChange={val => onSelectChange(val, 'school_lvl')}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="dateOfBirth" label="Date of Birth">
            <Input
              placeholder="Year"
              name="dob_year"
              value={form['dob_year']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="dob_month" label=" ">
            <Input
              placeholder="Month"
              name="dob_month"
              value={form['dob_month']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="dob_day" label=" ">
            <Input
              placeholder="Day"
              name="dob_day"
              value={form['dob_day']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="password" label="Password">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="confirmPass" label="ConfirmPassword">
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPass"
              value={form.confirmPass}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
