import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { Button } from '../../common/';
import { Profile, Label } from '../../common/ProfileStyle';
import { Divider } from './School.styles';

const School = props => {
  const { school } = props;
  const theme = { color: '#6ac66b' };
  return (
    <Profile>
      <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={`/school/edit/${school.id}`}>
          <ThemeProvider theme={theme}>
            <button className="l2-btn btn menuLinks">
              <EditOutlined />
            </button>
          </ThemeProvider>
        </Link>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <p style={{ fontWeight: 'bolder' }}>School:</p>
        <Label style={{ textAlign: 'right' }}>{school.name}</Label>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <p style={{ fontWeight: 'bolder' }}>Description:</p>
        <Label style={{ textAlign: 'right' }}>
          {school.school_description}
        </Label>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <p style={{ fontWeight: 'bolder' }}>Goals:</p>
        <Label style={{ textAlign: 'right' }}>{school.school_goals}</Label>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <p style={{ fontWeight: 'bolder' }}>Needs:</p>
        <Label style={{ textAlign: 'right' }}>{school.school_needs}</Label>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <p style={{ fontWeight: 'bolder' }}>Student Count:</p>
        <Label style={{ textAlign: 'right' }}>
          {school.count_students_currently_enrolled}
        </Label>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <p style={{ fontWeight: 'bolder' }}>Teacher Count:</p>
        <Label style={{ textAlign: 'right' }}>{school.count_teachers}</Label>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <p style={{ fontWeight: 'bolder' }}>Notes:</p>
        <Label style={{ textAlign: 'right' }}>{school.notes}</Label>
      </span>
      <Divider />
    </Profile>
  );
};

export default connect(null, {})(School);
