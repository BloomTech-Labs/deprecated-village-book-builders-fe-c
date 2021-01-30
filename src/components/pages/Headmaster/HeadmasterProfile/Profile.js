import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { fetchHeadmasterProfile } from '../../../../state/actions';

import { Profile, Label } from '../../../common/ProfileStyle';
import { Button } from '../../../common/';
import { ComponentTitles } from '../../../common';

// const baseURL = 'https://cors-anywhere.herokuapp.com/http://54.158.134.245/api';
const HeadmasterProfile = props => {
  const { headmasterProfile, fetchHeadmasterProfile } = props;
  useEffect(() => {
    fetchHeadmasterProfile(1); // change this later with login
  }, [fetchHeadmasterProfile]);
  return (
    <Profile>
      <span style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ComponentTitles titleText="Profile" />
        <div className="villageButtons">
          <Link to={`/profile/edit/${headmasterProfile.id}`}>
            <ThemeProvider theme={{ color: '#6ac66b' }}>
              <Button buttonText="Edit Your Profile" />
            </ThemeProvider>
          </Link>
        </div>
      </span>
      <span style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={`${headmasterProfile.headmasters_picture}`}
          alt="headmaster"
        />
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Name:</Label>
        <p>{`${headmasterProfile.first_name} ${headmasterProfile.last_name}`}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Gender:</Label>
        <p>{headmasterProfile.gender}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Address:</Label>
        <p>{headmasterProfile.address}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Bio:</Label>
        <p>{headmasterProfile.bio}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Communication App:</Label>
        <p>{headmasterProfile.communication_app}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>DOB:</Label>
        <p>{headmasterProfile.dob}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>General Availability:</Label>
        <p>{headmasterProfile.general_availability}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Mentor Advisor Point of Contact:</Label>
        <p>{headmasterProfile.mentor_advisor_point_of_contact}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Mentor Program Goals:</Label>
        <p>{headmasterProfile.goals_mentor_program}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Personal Goals:</Label>
        <p>{headmasterProfile.goals_personal}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>School Community Goals:</Label>
        <p>{headmasterProfile.goals_school_community}</p>
      </span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Goals Mentor Program:</Label>
        <p>{headmasterProfile.goals_mentor_program}</p>
      </span>
      <p></p>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '20px',
        }}
      >
        <Label>Time Zone:</Label>
        <p>{headmasterProfile.time_zone}</p>
      </span>
    </Profile>
  );
};

const mapStateToProps = state => {
  return {
    headmasterProfile: state.headmasterReducer.headmasterProfile,
  };
};

export default connect(mapStateToProps, { fetchHeadmasterProfile })(
  HeadmasterProfile
);
