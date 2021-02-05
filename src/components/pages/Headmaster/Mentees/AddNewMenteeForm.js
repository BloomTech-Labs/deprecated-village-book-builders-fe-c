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

const countries = {
  0: 'Afghanistan',
  1: 'Albania',
  2: 'Algeria',
  3: 'Andorra',
  4: 'Angola',
  5: 'Antigua and Barbuda',
  6: 'Argentina',
  7: 'Armenia',
  8: 'Australia',
  9: 'Austria',
  10: 'Azerbaijan',
  11: 'Bahamas',
  12: 'Bahrain',
  13: 'Bangladesh',
  14: 'Barbados',
  15: 'Belarus',
  16: 'Belgium',
  17: 'Belize',
  18: 'Benin',
  19: 'Bhutan',
  20: 'Bolivia',
  21: 'Bosnia and Herzegovina',
  22: 'Botswana',
  23: 'Brazil',
  24: 'Brunei',
  25: 'Bulgaria',
  26: 'Burkina Faso',
  27: 'Burundi',
  28: "Côte d'Ivoire",
  29: 'Cabo Verde',
  30: 'Cambodia',
  31: 'Cameroon',
  32: 'Canada',
  33: 'Central African Republic',
  34: 'Chad',
  35: 'Chile',
  36: 'China',
  37: 'Colombia',
  38: 'Comoros',
  39: 'Congo (Congo-Brazzaville)',
  40: 'Costa Rica',
  41: 'Croatia',
  42: 'Cuba',
  43: 'Cyprus',
  44: 'Czechia (Czech Republic)',
  45: 'Democratic Republic of the Congo',
  46: 'Denmark',
  47: 'Djibouti',
  48: 'Dominica',
  49: 'Dominican Republic',
  50: 'Ecuador',
  51: 'Egypt',
  52: 'El Salvador',
  53: 'Equatorial Guinea',
  54: 'Eritrea',
  55: 'Estonia',
  56: 'Eswatini (fmr. Swaziland)',
  57: 'Ethiopia',
  58: 'Fiji',
  59: 'Finland',
  60: 'France',
  61: 'Gabon',
  62: 'Gambia',
  63: 'Georgia',
  64: 'Germany',
  65: 'Ghana',
  66: 'Greece',
  67: 'Grenada',
  68: 'Guatemala',
  69: 'Guinea',
  70: 'Guinea-Bissau',
  71: 'Guyana',
  72: 'Haiti',
  73: 'Holy See',
  74: 'Honduras',
  75: 'Hungary',
  76: 'Iceland',
  77: 'India',
  78: 'Indonesia',
  79: 'Iran',
  80: 'Iraq',
  81: 'Ireland',
  82: 'Israel',
  83: 'Italy',
  84: 'Jamaica',
  85: 'Japan',
  86: 'Jordan',
  87: 'Kazakhstan',
  88: 'Kenya',
  89: 'Kiribati',
  90: 'Kuwait',
  91: 'Kyrgyzstan',
  92: 'Laos',
  93: 'Latvia',
  94: 'Lebanon',
  95: 'Lesotho',
  96: 'Liberia',
  97: 'Libya',
  98: 'Liechtenstein',
  99: 'Lithuania',
  100: 'Luxembourg',
  101: 'Madagascar',
  102: 'Malawi',
  103: 'Malaysia',
  104: 'Maldives',
  105: 'Mali',
  106: 'Malta',
  107: 'Marshall Islands',
  108: 'Mauritania',
  109: 'Mauritius',
  110: 'Mexico',
  111: 'Micronesia',
  112: 'Moldova',
  113: 'Monaco',
  114: 'Mongolia',
  115: 'Montenegro',
  116: 'Morocco',
  117: 'Mozambique',
  118: 'Myanmar (formerly Burma)',
  119: 'Namibia',
  120: 'Nauru',
  121: 'Nepal',
  122: 'Netherlands',
  123: 'New Zealand',
  124: 'Nicaragua',
  125: 'Niger',
  126: 'Nigeria',
  127: 'North Korea',
  128: 'North Macedonia',
  129: 'Norway',
  130: 'Oman',
  131: 'Pakistan',
  132: 'Palau',
  133: 'Palestine State',
  134: 'Panama',
  135: 'Papua New Guinea',
  136: 'Paraguay',
  137: 'Peru',
  138: 'Philippines',
  139: 'Poland',
  140: 'Portugal',
  141: 'Qatar',
  142: 'Romania',
  143: 'Russia',
  144: 'Rwanda',
  145: 'Saint Kitts and Nevis',
  146: 'Saint Lucia',
  147: 'Saint Vincent and the Grenadines',
  148: 'Samoa',
  149: 'San Marino',
  150: 'Sao Tome and Principe',
  151: 'Saudi Arabia',
  152: 'Senegal',
  153: 'Serbia',
  154: 'Seychelles',
  155: 'Sierra Leone',
  156: 'Singapore',
  157: 'Slovakia',
  158: 'Slovenia',
  159: 'Solomon Islands',
  160: 'Somalia',
  161: 'South Africa',
  162: 'South Korea',
  163: 'South Sudan',
  164: 'Spain',
  165: 'Sri Lanka',
  166: 'Sudan',
  167: 'Suriname',
  168: 'Sweden',
  169: 'Switzerland',
  170: 'Syria',
  171: 'Tajikistan',
  172: 'Tanzania',
  173: 'Thailand',
  174: 'Timor-Leste',
  175: 'Togo',
  176: 'Tonga',
  177: 'Trinidad and Tobago',
  178: 'Tunisia',
  179: 'Turkey',
  180: 'Turkmenistan',
  181: 'Tuvalu',
  182: 'Uganda',
  183: 'Ukraine',
  184: 'United Arab Emirates',
  185: 'United Kingdom',
  186: 'United States of America',
  187: 'Uruguay',
  188: 'Uzbekistan',
  189: 'Vanuatu',
  190: 'Venezuela',
  191: 'Vietnam',
  192: 'Yemen',
  193: 'Zambia',
  194: 'Zimbabwe',
};

const countriesArr = Object.values(countries);

export default function AddNewMenteeForm(props) {
  const { form, onFormChange, onSelectChange, onFormSubmit } = props;

  const onSubmitFailed = errorInfo => {
    console.log(`Failed: ${errorInfo}`);
  };

  const countryCodePrefix = (
    <Form.Item
      name="countryCode"
      label="Country Code"
      rules={[
        {
          required: true,
          message: 'Country Code is required.',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            const cleanedCode = parseInt(value);
            if (
              (typeof value === 'string' && value.length < 1) ||
              value.length > 3
            ) {
              return Promise.reject('Country Code must be 1 to 3 characters.');
            } else {
              if (cleanedCode.toString() === 'NaN') {
                return Promise.reject(
                  'Country code must contain only numbers.'
                );
              } else if (cleanedCode === 0) {
                return Promise.reject(
                  'Country code must be a number greater than 0'
                );
              } else {
                return Promise.resolve();
              }
            }
          },
        }),
      ]}
      noStyle
    >
      <Input
        style={{ width: 70 }}
        placeholder="1"
        name="phone_code"
        value={form['phone_code']}
        onChange={onFormChange}
      />
    </Form.Item>
  );

  return (
    <Form
      id="newMentee"
      layout="vertical"
      size="large"
      initialValues={{ email: form.email }}
      onSubmitFailed={onSubmitFailed}
      onFinish={onFormSubmit}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="first_name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'First Name is required.',
              },
            ]}
          >
            <Input
              name="first_name"
              placeholder="First Name"
              value={form['first_name']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label=" "
            name="last_name"
            rules={[
              {
                required: true,
                message: 'Last Name is required.',
              },
            ]}
          >
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
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not a valid E-Mail.',
              },
              {
                required: true,
                message: 'Email is required.',
              },
            ]}
          >
            <Input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="phone"
            label="Country Code & Phone"
            rules={[
              {
                required: true,
                message: 'Phone Number is required.',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const cleanedValue = parseInt(value);
                  if (cleanedValue.toString() === 'NaN') {
                    return Promise.reject(
                      'Please put numbers only for the phone field'
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input
              addonBefore={countryCodePrefix}
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
          <Form.Item
            name="subjects"
            label="Subjects"
            rules={[
              {
                required: true,
                message: 'At least one Subject required.',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value.length) {
                    return Promise.reject('At least one Subject required');
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
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
          <Form.Item
            name="home_country"
            label="Home Country"
            rules={[
              {
                required: true,
                message: 'Country fied is required.',
              },
            ]}
          >
            <Select
              placeholder="Country"
              onChange={val => onSelectChange(val, 'home_country')}
              rules={[
                {
                  required: true,
                  message: 'You must select your country.',
                },
              ]}
            >
              {countriesArr.map((country, i) => {
                return (
                  <Select.Option key={i} value={country}>
                    {country}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="homeTimeZone"
            label="Time Zone"
            rules={[
              {
                required: true,
                message: 'Time Zone field is required.',
              },
            ]}
          >
            <Select
              placeholder="TimeZone"
              onChange={val => onSelectChange(val, 'time_zone')}
              rules={[
                {
                  required: true,
                  message: 'TimeZone field is requird.',
                },
              ]}
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
          <Form.Item
            name="primaryLang"
            label="Primary Language"
            rules={[
              {
                required: true,
                message: 'Primary Language field is required.',
              },
            ]}
          >
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
          <Form.Item
            name="grade"
            label="School Grade"
            rules={[
              {
                required: true,
                message: 'School Grade field is required.',
              },
            ]}
          >
            <Select
              placeholder="School Grade"
              options={gradeLevels}
              onChange={val => onSelectChange(val, 'school_lvl')}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            name="dateOfBirth"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: 'Birthday Year field is required.',
              },
            ]}
          >
            <Input
              placeholder="Year"
              name="dob_year"
              value={form['dob_year']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            name="dob_month"
            label=" "
            rules={[
              {
                required: true,
                message: 'Birthday Month field is required.',
              },
            ]}
          >
            <Input
              placeholder="Month"
              name="dob_month"
              value={form['dob_month']}
              onChange={onFormChange}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            name="dob_day"
            label=" "
            rules={[
              {
                required: true,
                message: 'Birthday Day field is required.',
              },
            ]}
          >
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
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Password field is required.',
              },
            ]}
          >
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
          <Form.Item
            name="confirmPass"
            label="ConfirmPassword"
            rules={[
              {
                required: true,
                message: 'Confirm password field is required',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value !== form.password || !value) {
                    return Promise.reject(
                      'The two passwords you have entered do not match.'
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
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
