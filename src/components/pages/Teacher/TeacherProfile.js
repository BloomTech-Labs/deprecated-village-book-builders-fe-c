import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ComponentTitles, Button } from '../../common/';
import { Label } from '../../common/ProfileStyle';
import { Profile as StyledProfile } from '../../common/ProfileStyle';
import { getTeacherProfile } from '../../../state/actions/teacherActions';

const TeacherProfile = props => {
  const { teacherProfile, getTeacherProfile } = props;
  /*Labels should be replaced with data from the backend*/
  const history = useHistory();
  const params = useParams();

  const editProfileHandler = event =>
    history.push(`/teacher/edit/${params.id}`);

  useEffect(() => {
    getTeacherProfile(params.id);
  }, [getTeacherProfile, params.id]);

  return (
    <div key={teacherProfile.id}>
      <StyledProfile>
        <ComponentTitles
          titleText={`${teacherProfile.firstName} ${teacherProfile.lastName}`}
        />
        <Label>Home</Label>
        <p>
          {teacherProfile.homeCity}, {teacherProfile.homeCountry}
        </p>
        <Label>Time Zone</Label>
        <p>{teacherProfile.timeZone}</p>
        <Label>Gender</Label>
        <p>{teacherProfile.gender}</p>
        <Label>Contact</Label>
        <p>{teacherProfile.email}</p>
        <p>{teacherProfile.phone}</p>
        <Label>Languages</Label>
        <p>Primary- {teacherProfile.firstLanguage}</p>
        <p>
          Other-{' '}
          {!teacherProfile.otherLanguages
            ? null
            : teacherProfile.otherLanguages.map(language => <p>{language}</p>)}
        </p>
        <Label>Education</Label>
        <p>{teacherProfile.education}</p>
        <Label>Subjects</Label>
        {!teacherProfile.subjects
          ? null
          : teacherProfile.subjects.map(subject => <p>{subject}</p>)}
      </StyledProfile>
      <Button
        classType={'edit-headmaster-profile'}
        buttonText={'Edit Profile'}
        handleClick={editProfileHandler}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    teacherProfile: state.teacherReducer.teacherProfile,
  };
};

export default connect(mapStateToProps, { getTeacherProfile })(TeacherProfile);
