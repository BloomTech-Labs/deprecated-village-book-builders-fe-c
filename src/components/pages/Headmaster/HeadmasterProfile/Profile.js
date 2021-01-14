import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { fetchHeadmasterProfile } from '../../../../state/actions';

import { Profile, Label } from '../../../common/ProfileStyle';
import { Button } from '../../../common/';
import { ComponentTitle } from '../../../common';

// const baseURL = 'https://cors-anywhere.herokuapp.com/http://54.158.134.245/api';
const HeadmasterProfile = props => {
  const { headmasterProfile, fetchHeadmasterProfile } = props;
  useEffect(() => {
    fetchHeadmasterProfile(1); // change this later with login
  }, [fetchHeadmasterProfile]);
  return (
    <Profile>
      <ComponentTitle titleText="Village" />
      <img src={`${headmasterProfile.headmasters_picture}`} alt="headmaster" />
      <Label>Name:</Label>
      <p>{`${headmasterProfile.first_name} ${headmasterProfile.last_name}`}</p>

      <Label>Gender:</Label>
      <p>{headmasterProfile.gender}</p>

      <Label>Address:</Label>
      <p>{headmasterProfile.address}</p>

      <Label>Bio:</Label>
      <p>{headmasterProfile.bio}</p>

      <Label>Communication App:</Label>
      <p>{headmasterProfile.communication_app}</p>

      <Label>DOB:</Label>
      <p>{headmasterProfile.dob}</p>

      <Label>General Availability:</Label>
      <p>{headmasterProfile.general_availability}</p>

      <Label>Mentor Advisor Point of Contact:</Label>
      <p>{headmasterProfile.mentor_advisor_point_of_contact}</p>

      <Label>Mentor Program Goals:</Label>
      <p>{headmasterProfile.goals_mentor_program}</p>

      <Label>Personal Goals:</Label>
      <p>{headmasterProfile.goals_personal}</p>

      <Label>School Community Goals:</Label>
      <p>{headmasterProfile.goals_school_community}</p>

      <Label>Goals Mentor Program:</Label>
      <p>{headmasterProfile.goals_mentor_program}</p>

      <p></p>

      <Label>Time Zone:</Label>
      <p>{headmasterProfile.time_zone}</p>
      <div className="villageButtons">
        <Link to={`/profile/edit/${headmasterProfile.id}`}>
          <ThemeProvider theme={{ color: '#6ac66b' }}>
            <Button buttonText="Edit Your Profile" />
          </ThemeProvider>
        </Link>
      </div>
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
