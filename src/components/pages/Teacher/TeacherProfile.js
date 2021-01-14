import React from 'react';
import { ComponentTitle, Button } from '../../common/';
import { Label } from '../../common/ProfileStyle';

const TeacherProfile = props => {
  /*Make a Teacher Role in State to dynamic change the component. This must get the id of the teacher*/
  /*Labels should be replaced with data from the backend*/

  const editProfileHandler = event => {};

  return (
    <div>
      <ComponentTitle titleText={'Teacher'} />
      <img src={''} alt="teacher" />
      <Label>Name:</Label>
      <Label>Education:</Label>
      <Label>Location:</Label>
      <Label>Subjects:</Label>
      <Label>Fun Fact:</Label>
      <Button
        classType={'edit-headmaster-profile'}
        buttonText={'Edit Profile'}
        handleClick={''}
      />
    </div>
  );
};

export default TeacherProfile;
