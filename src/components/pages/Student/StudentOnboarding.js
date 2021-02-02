import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import {
  InfoCircleOutlined,
  EditOutlined,
  PlusCircleOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { Divider, Input, Modal, List, Avatar, Select } from 'antd';
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
  const [searchBy, setSearchBy] = useState('Name');
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

  const searchHandler = e => setSearch(e.target.value);
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

  function searchOptions(value) {
    setSearchBy(value);
  }
  const selectBefore = (
    <Select
      defaultValue="Name"
      className="select-before"
      onChange={searchOptions}
      style={{ width: 100 }}
    >
      <Option value="Name">Name</Option>
      <Option value="YYYY-MM-DD">Birthday</Option>
    </Select>
  );

  // Search filters go here 'searchBy' is the field we're filtering through
  if (Array.isArray(menteesSelection) && searchBy == 'Name') {
    menteesSelection = menteesSelection.filter(
      item =>
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.last_name.toLowerCase().includes(search.toLowerCase())
    );
  } else if (Array.isArray(menteesSelection) && searchBy == 'YYYY-MM-DD') {
    menteesSelection = menteesSelection.filter(item =>
      item.dob.includes(search)
    );
  }

  useEffect(() => {
    props.fetchMentees();
    console.log('showmodal', showModal);
  }, [showModal]);

  return (
    <div className="menteeContainer">
      <h1 id="menteeTitle">New Student Onboarding</h1>
      <div className="exploreWrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Input.Search
            data-testid="search-bar"
            addonBefore={selectBefore}
            value={search}
            placeholder={searchBy}
            style={{ width: '80%', alignSelf: 'center' }}
            onChange={searchHandler}
          />
        </div>
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={menteesSelection}
          renderItem={item => (
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
          )}
        />
        ,
      </div>
      <Modal
        className="menteeModal"
        visible={showModal}
        title="Mentee Profile"
        onCancel={moreInfoHandler}
        maskClosable
        destroyOnClose
        footer={[
          <Button key="back" onClick={moreInfoHandler}>
            Return
          </Button>,
          <Button key="delete" onClick={() => console.log('delete')}>
            Delete
          </Button>,
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
