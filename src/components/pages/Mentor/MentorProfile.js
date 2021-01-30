import { List, Avatar, Divider, Skeleton, Table, Tag } from 'antd';
import moment from 'moment';
import React from 'react';
import { debugLog } from '../../../utils/debugMode';
const MentorProfile = ({ currentMentor }) => {
  debugLog(
    'Prop drilled from Mentors.js',
    currentMentor,
    moment.utc(currentMentor.dob).format('dddd, MMMM Do of YYYY')
  );
  const columns = [
    {
      title: 'Contact Hours - From',
      dataIndex: 'as_early_as',
      key: 'as_early_as',
    },
    {
      title: 'Contact Hours - Until',
      dataIndex: 'as_late_as',
      key: 'as_late_as',
    },
    {
      title: 'Time Zone (UTC)',
      dataIndex: 'time_zone',
      key: 'time_zone',
    },
    {
      title: 'Methods',
      dataIndex: 'methods',
      key: 'methods',
      render: tags => (
        <>
          {tags.map(tag => {
            return (
              <Tag color="geekblue" key={tags.indexOf(tag)}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  return (
    <div className="menteeProfileWrapper">
      {!currentMentor ? (
        <Skeleton />
      ) : (
        <>
          <Avatar
            src={currentMentor.mentor_picture}
            size={250}
            style={{ alignSelf: 'center' }}
          />
          <Divider size="large" />
          <h1 style={{ alignSelf: 'center' }}>
            {currentMentor.first_name + ' ' + currentMentor.last_name}
          </h1>
          <Divider plain>Email</Divider>
          <p>{currentMentor.email}</p>
          <Divider plain>Languages (left to rigth)</Divider>
          <p>{currentMentor.primary_language}</p>
          <Divider plain>Gender</Divider>
          <p>{currentMentor.gender}</p>
          <Divider plain>Date of Birth</Divider>
          <p>{moment.utc(currentMentor.dob).format('dddd, MMMM Do of YYYY')}</p>
          <Divider plain>Grades</Divider>
          <p>{`English :${currentMentor.english_lvl}`}</p>
          <p>{`Math :${currentMentor.math_lvl}`}</p>
          <p>{`Reading :${currentMentor.reading_lvl}`}</p>
          <p>{`School :${currentMentor.school_lvl}`}</p>
          <Divider plain>Academic Description</Divider>
          <p>{currentMentor.academic_description}</p>
          <Divider plain>Support Areas</Divider>
          <p>{currentMentor.support_needed}</p>
          <Divider plain>Availability</Divider>
          <Table
            align="center"
            pagination={false}
            size="small"
            tableLayout="fixed"
            dataSource={[currentMentor.availability]}
            columns={columns}
            key="table"
          />
          <Divider plain>Other Questions</Divider>
          {currentMentor.dynamic_questions.map(question => {
            return (
              <div key={question.qId}>
                <Divider plain>{question.question}</Divider>
                <p>{question.answer}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MentorProfile;
