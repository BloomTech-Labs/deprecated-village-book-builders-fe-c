import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { getStudentProfile } from '../../../../state/actions/studentActions';

import { Profile, Label } from '../../../common/ProfileStyle';
import { Button } from '../../../common/';
import { ComponentTitles } from '../../../common';

// const baseURL = 'https://cors-anywhere.herokuapp.com/http://54.158.134.245/api';
const StudentProfile = props => {
  const { studentProfile, getStudentProfile } = props;
  //   useEffect(() => {
  //     getStudentProfile(); // change this later with login
  //   }, [getStudentProfile]);
  return (
    <Profile>
      <ComponentTitles titleText="Edit Your Profile" />
      <img src={`${studentProfile.mentee_picture}`} alt="mentee" />
      <Label> Name:</Label>
      <p>{`${studentProfile.first_name} ${studentProfile.last_name}`}</p>

      <Label>Gender:</Label>
      <p>{studentProfile.gender}</p>

      <Label>Email:</Label>
      <p>{studentProfile.email}</p>

      <Label>Language:</Label>
      <p>{studentProfile.language}</p>

      <Label>School Level:</Label>
      <p>{studentProfile.school_lvl}</p>

      <Label>DOB:</Label>
      <p>{studentProfile.dob}</p>

      <Label>General Availability:</Label>
      <p>{studentProfile.general_availability}</p>

      <Label>English Level:</Label>
      <p>{studentProfile.english_lvl}</p>

      <Label>School Level:</Label>
      <p>{studentProfile.school_lvl}</p>

      <Label>Math Level:</Label>
      <p>{studentProfile.math_lvl}</p>

      <Label>Reading Level:</Label>
      <p>{studentProfile.reading_lvl}</p>

      <Label>Academic Description:</Label>
      <p>{studentProfile.academic_description}</p>

      <Label>Support Needed:</Label>
      <p>{studentProfile.support_neededl}</p>
      <div className="villageButtons">
        <Link to={`/profile/edit/${studentProfile.id}`}>
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
    studentProfile: state.studentReducer.studentProfile,
  };
};

export default connect(mapStateToProps, { getStudentProfile })(StudentProfile);
