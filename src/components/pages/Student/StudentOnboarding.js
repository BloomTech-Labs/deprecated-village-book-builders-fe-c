import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import moment from 'moment';
import {
  InfoCircleOutlined,
  EditOutlined,
  PlusCircleOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Divider, Input, Modal, List, Avatar, Select, DatePicker } from 'antd';
import Button from '../../common/Button';
import { connect } from 'react-redux';
import { checkToken, fetchMentees } from '../../../state/actions/index';
import MenteeForm from '../Headmaster/Mentees/MenteeForm';
import MenteeProfile from '../Headmaster/Mentees/MenteeProfile';

const StudentOnboarding = props => {
  let menteesSelection = [...props.mentees];
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentMentee, setCurrentMentee] = useState({});
  const menteeStyles = {
    confirmOnboarding: {
      border: 'none',
      backgroundColor: '#ff914d',
      fontFamily: 'Caveat Brush,cursive',
      fontStyle: 'italic',
      webkitLetterSpacing: '2px',
      mozLetterSpacing: '2px',
      msLetterSpacing: '2px',
      letterSpacing: '2px',
      fontWeight: '400',
      fontSize: '22px',
      color: 'white',
      borderRadius: '18px',
      padding: '8px',
      paddingLeft: '15px',
      paddingRight: '15px',
      webkitAppearance: 'none',
      margin: '1rem 0',
      textAlign: 'right',
      margin: '1rem 20px',
      width: 'auto',
    },
  };

  const searchHandler = e => {
    setSearch(e);
  };
  const moreInfoHandler = (e, menteeData) => {
    if (showModal) {
      // Closing Modal
      setShowModal(false);
      setCurrentMentee({});
      console.log('this got fired!!!', menteeData);
    } else {
      // Opening Modal
      setShowModal(true);
      setCurrentMentee(menteeData);
    }
  };

  // These are the dropdown options for the searchbar
  const { Option, OptGroup } = Select;

  // Simplifying filter options for new students down to just DOB
  // Example dob string from BE: 1987-10-06T02:42:54.255Z
  menteesSelection = menteesSelection.filter(item => {
    // Normalizes BE date to be matched with moment object data
    if (!search) {
      return menteesSelection;
    }
    const formattedDob = `${item.dob.slice(8, 10)}/${item.dob.slice(
      5,
      7
    )}/${item.dob.slice(0, 4)}`;
    console.log(formattedDob, search._i);
    return formattedDob === search._i;
  });

  useEffect(() => {
    props.fetchMentees();
    console.log('showmodal', showModal);
  }, [showModal]);

  return (
    <div className="menteeContainer">
      <h1 id="menteeTittle">New Student Onboarding</h1>
      <div className="exploreWrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DatePicker
            data-testid="search-bar"
            value={search}
            placeholder="Select your Date of Birth"
            style={{ width: '20%', alignSelf: 'center' }}
            onChange={searchHandler}
            format={'DD/MM/YYYY'}
          />
        </div>
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={menteesSelection}
          renderItem={item => {
            console.log(item.dob);
            return (
              <List.Item>
                <div className="listItemWrapper">
                  <div className="listItemMeta">
                    <List.Item.Meta
                      avatar={<Avatar src={item.mentee_picture} />}
                      title={item.first_name + ' ' + item.last_name}
                      description={item.dob}
                    />
                  </div>
                  <div className="listItemButtonWrapper">
                    <button
                      onClick={e => {
                        console.log('Confirming student...');
                        moreInfoHandler(e, item);
                      }}
                      style={menteeStyles.confirmOnboarding}
                      className="l2-btn btn "
                    >
                      <CheckOutlined />
                    </button>
                  </div>
                </div>
              </List.Item>
            );
          }}
        />
        ,
      </div>
      <p>
        Can't find the Student you're looking for? Contact your teacher or
        headmaster.
      </p>
      <Modal
        className="menteeModal"
        visible={showModal}
        title="Mentee Profile"
        onCancel={moreInfoHandler}
        maskClosable
        destroyOnClose
        footer={[
          <button
            onClick={e => {
              moreInfoHandler(e, {});
            }}
            style={menteeStyles.confirmOnboarding}
            className="l2-btn btn "
          >
            <CloseOutlined />
          </button>,
          <button
            onClick={e => {
              console.log('Confirming student...');
            }}
            style={menteeStyles.confirmOnboarding}
            className="l2-btn btn "
          >
            <CheckOutlined />
          </button>,
        ]}
      >
        <MenteeProfile currentMentee={currentMentee} />
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mentees: state.headmasterReducer.mentees.filter(mentee => !mentee.active),
    userId: state.authReducer.userId,
    role: state.authReducer.role,
  };
};

export default connect(mapStateToProps, {
  checkToken,
  fetchMentees,
})(StudentOnboarding);
