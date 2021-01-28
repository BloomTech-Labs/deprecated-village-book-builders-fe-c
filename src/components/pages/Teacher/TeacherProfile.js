import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ComponentTitles, Button } from '../../common/';
import { Label } from '../../common/ProfileStyle';
import { Profile as StyledProfile } from '../../common/ProfileStyle';

const TeacherProfile = props => {
  const { teacherProfile } = props;
  /*Labels should be replaced with data from the backend*/
  const history = useHistory();
  const params = useParams();

  const editProfileHandler = event =>
    history.push(`/teacher/edit/${params.id}`);

  // TemporaryTeacherProfile until backend has teacher profile data
  const temporaryTeacherProfile = {
    imgURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nebraska_Cornhuskers_logo%2C_1992%E2%80%932003.svg/1200px-Nebraska_Cornhuskers_logo%2C_1992%E2%80%932003.svg.png',
    name: 'AJ Gebara',
    contact: 'ajgebara@gmail.com',
    bio:
      'Pokem ipsum dolor sit amet Exeggutor Kecleon Wing Attack Doduo Red Unown. Sunt in culpa Drilbur Calcium Hoenn Shieldon Wynaut Charizard. Growl Venonat Scolipede Espeon Charizard Barboach Hidden Machine',
    education:
      'University of Nebraska-Lincoln, Masters of Arts in Science Education',
    location: 'Lincoln, Nebraska',
    subjects: 'Biology and Chemistry',
    funFact: 'I read Ancient Greek',
  };

  console.log(teacherProfile);

  return (
    <div>
      <StyledProfile>
        <ComponentTitles titleText={'Teacher'} />
        <img src={`${teacherProfile.imgURL}`} alt="teacher" />
        <Label>Name:</Label>
        <p>{`${teacherProfile.name}`}</p>
        <Label>Contact:</Label>
        <p>{`${teacherProfile.contact}`}</p>
        <Label>Bio:</Label>
        <p>{`${teacherProfile.bio}`}</p>
        <Label>Education:</Label>
        <p>{`${teacherProfile.education}`}</p>
        <Label>Location:</Label>
        <p>{`${teacherProfile.location}`}</p>
        <Label>Subjects:</Label>
        <p>{`${teacherProfile.subjects}`}</p>
        <Label>Fun Fact:</Label>
        <p>{`${teacherProfile.funFact}`}</p>
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

export default connect(mapStateToProps, {})(TeacherProfile);
