import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';
import { Button, Divider, Input, Modal, List, Avatar, Select } from 'antd';
import { connect } from 'react-redux';
import { checkToken, fetchMentees } from '../../../../state/actions/index';
import MenteeForm from './MenteeForm';
import MenteeProfile from './MenteeProfile';
const Mentees = props => {
  let menteesSelection = [...props.mentees];
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentMentee, setCurrentMentee] = useState({});
  const [searchBy, setSearchBy] = useState('name');

  const editingHandler = e => {
    setEditing(!editing);
    console.log(e);
  };
  const searchHandler = e => setSearch(e.target.value);
  const moreInfoHandler = (e, menteeData) => {
    if (showModal) {
      // Closing Modal
      setShowModal(false);
      setCurrentMentee({});
      setEditing(false);
    } else {
      // Opening Modal
      setShowModal(true);
      setCurrentMentee(menteeData);
      // console.log(menteeData);
    }
  };

  // These are search options that appear to the left of the search bar
  const { Option } = Select;

  function searchOptions(value) {
    setSearchBy(value);
  }
  const selectBefore = (
    <Select
      defaultValue="Search by:"
      className="select-before"
      onChange={searchOptions}
    >
      <Option value="Name">Search by name</Option>
      <Option value="YYYY-MM-DD">Search by DOB</Option>
    </Select>
  );

  if (Array.isArray(menteesSelection) && searchBy == 'name') {
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
  }, []);

  return (
    <div className="menteeContainer">
      <h1 id="menteeTittle">Mentee Management</h1>
      <div className="exploreWrapper">
        <Button
          style={{ width: '80%', marginBottom: '10pt', alignSelf: 'center' }}
          align="center"
        >
          Create New Library
        </Button>
        <Input.Search
          addonBefore={selectBefore}
          value={search}
          placeholder={searchBy}
          style={{ width: '80%', alignSelf: 'center' }}
          onChange={searchHandler}
        />
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
                  <Button
                    onClick={e => moreInfoHandler(e, item)}
                    className="listItemButton"
                    size="middle"
                    type="default"
                  >
                    More Info
                  </Button>
                  <Button
                    onClick={e => {
                      moreInfoHandler(e, item);
                      editingHandler();
                    }}
                    className="listItemButton"
                    danger
                    size="middle"
                    type="default"
                  >
                    Edit
                  </Button>
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
            <Button key="submit" type="primary" onClick={moreInfoHandler}>
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
          <MenteeForm />
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

export default connect(mapStateToProps, { checkToken, fetchMentees })(Mentees);
