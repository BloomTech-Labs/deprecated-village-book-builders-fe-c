import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';
import {
  InfoCircleOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Divider, Input, Modal, List, Avatar, Select } from 'antd';
import Button from '../../../common/Button';
import { connect } from 'react-redux';
import {
  checkToken,
  fetchMentees,
  editMentee,
} from '../../../../state/actions/index';
import MenteeForm from './MenteeForm';
import MenteeProfile from './MenteeProfile';

const Mentees = props => {
  let menteesSelection = [...props.mentees];
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentMentee, setCurrentMentee] = useState({});
  const [searchBy, setSearchBy] = useState('Name');
  const menteeStyles = {
    newMentee: {
      border: 'none',
      backgroundColor: '#ff914d',
      fontFamily: 'Caveat Brush,cursive',
      fontStyle: 'italic',
      webkitLetterSpacing: '2px',
      mozLetterSpacing: '2px',
      msLetterSpacing: '2px',
      height: 'none',
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
      margin: '1rem 0',
      width: 'auto',
    },
    moreInfo: {
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
    editMentee: {
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
      margin: '1rem 0',
      width: 'auto',
    },
  };

  const editingHandler = e => {
    setEditing(!editing);
    console.log(e);
    console.log(showModal);
  };
  const searchHandler = e => setSearch(e.target.value);
  const moreInfoHandler = (e, menteeData) => {
    if (showModal) {
      // Closing Modal
      setShowModal(false);
      setCurrentMentee({});
      setEditing(false);
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
      <Option value="Email">Email</Option>
      <Option value="Timezone">Timezone</Option>
      <OptGroup label="Grades:">
        <Option value="Min English grade">English</Option>
        <Option value="Min Math grade">Math</Option>
        <Option value="Min Reading grade">Reading</Option>
        <Option value="Min School grade">School</Option>
      </OptGroup>
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
  } else if (Array.isArray(menteesSelection) && searchBy == 'Email') {
    menteesSelection = menteesSelection.filter(item =>
      item.email.toLowerCase().includes(search.toLowerCase())
    );
  } else if (Array.isArray(menteesSelection) && searchBy == 'Timezone') {
    menteesSelection = menteesSelection.filter(item =>
      item.availability.time_zone.toLowerCase().includes(search.toLowerCase())
    );
    // this dynamically filters grades by the selected class. The 'searchBy' strings must match the corresonding value on the selectBy options as we're just slicing the string as it's passed in.
  } else if (
    Array.isArray(menteesSelection) &&
    (searchBy == 'Min English grade' ||
      'Min Math grade' ||
      'Min Reading grade' ||
      'Min School grade')
  ) {
    let sliced = searchBy.toLowerCase().split(' ');
    let searchTerm = sliced[1] + '_lvl';
    menteesSelection = menteesSelection.filter(
      item => item[searchTerm] >= search
    );
  }

  useEffect(() => {
    props.fetchMentees();
    console.log('showmodal', showModal);
  }, [showModal]);

  return (
    <div className="menteeContainer">
      <h1 id="menteeTittle">Mentee Management</h1>
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
          <button
            className="l2-btn btn"
            style={menteeStyles.newMentee}
            onClick={e => console.log(e)}
          >
            {/* Create New Mentee  */}
            Create New Mentee <PlusCircleOutlined />
          </button>
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
                    title={
                      <a
                        onClick={e => {
                          moreInfoHandler(e, item);
                        }}
                      >
                        {item.first_name + ' ' + item.last_name}
                      </a>
                    }
                    description={item.academic_description}
                  />
                </div>
                <div className="listItemButtonWrapper">
                  <button
                    onClick={e => {
                      moreInfoHandler(e, item);
                    }}
                    style={menteeStyles.moreInfo}
                    className="l2-btn btn "
                  >
                    <InfoCircleOutlined />
                  </button>
                  <button
                    onClick={e => {
                      moreInfoHandler(e, item);
                      editingHandler();
                    }}
                    style={menteeStyles.editMentee}
                    className="l2-btn btn "
                  >
                    <EditOutlined />
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
          <Button
            key="back"
            onClick={editing ? editingHandler : moreInfoHandler}
          >
            Return
          </Button>,
          <Button key="delete" onClick={() => console.log('delete')}>
            Delete
          </Button>,
          editing ? (
            <Button key="submit" type="primary" onClick={editMentee()}>
              Submit
            </Button>
          ) : (
            <Button key="edit" type="primary" onClick={editingHandler}>
              Edit
            </Button>
          ),
        ]}
      >
        {editing ? (
          <MenteeForm
            editing={editing}
            currentMentee={currentMentee}
            setShowModal={setShowModal}
          />
        ) : (
          <MenteeProfile currentMentee={currentMentee} />
        )}
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mentees: state.headmasterReducer.mentees,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
  };
};

export default connect(mapStateToProps, {
  checkToken,
  fetchMentees,
  editMentee,
})(Mentees);
