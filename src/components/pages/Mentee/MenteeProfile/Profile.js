import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import data from './data.json';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { Profile, Label } from '../../../common/ProfileStyle';
import { Button } from '../../../common';
import { ComponentTitles } from '../../../common';

const MenteeProfile = () => {
  console.log(data);
  return (
    <Profile>
      <ComponentTitles titleText="Village" />
      <img src={`${data[0].mentee_picture}`} alt="headmaster" />
      <Label> Name:</Label>
      <p>{`${data[0].first_name} ${data[0].last_name}`}</p>

      <Label>Gender:</Label>
      <p>{data[0].gender}</p>

      <Label>Email:</Label>
      <p>{data[0].email}</p>

      <Label>Language:</Label>
      <p>{data[0].language}</p>

      <Label>School Level:</Label>
      <p>{data[0].school_lvl}</p>

      <Label>DOB:</Label>
      <p>{data[0].dob}</p>

      <Label>General Availability:</Label>
      <p>{data[0].general_availability}</p>

      <Label>English Level:</Label>
      <p>{data[0].english_lvl}</p>

      <Label>School Level:</Label>
      <p>{data[0].school_lvl}</p>

      <Label>Math Level:</Label>
      <p>{data[0].math_lvl}</p>

      <Label>Reading Level:</Label>
      <p>{data[0].reading_lvl}</p>

      <Label>Academic Description:</Label>
      <p>{data[0].academic_description}</p>

      <Label>Support Needed:</Label>
      <p>{data[0].support_neededl}</p>

      {/* <Label>School Community Goals:</Label>
      <p>{data[0].goals_school_community}</p>

      <Label>Goals Mentor Program:</Label>
      <p>{data[0].goals_mentor_program}</p> */}
      {/* 
      <p></p>

      <Label>Time Zone:</Label>
      <p>{data[0].time_zone}</p> */}
      <div
        className="villageButtons"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Link to={`/profile/edit/${data[0].id}`}>
          <ThemeProvider theme={{ color: '#6ac66b' }}>
            <Button buttonText="Edit Your Profile" />
          </ThemeProvider>
        </Link>
      </div>
    </Profile>
  );
};
export default MenteeProfile;
