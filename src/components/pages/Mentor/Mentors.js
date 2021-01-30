import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMentors } from '../../../state/actions/index';
import { Button, Divider, Input, Modal, List, Avatar, Select } from 'antd';

const Mentors = props => {
  let mentorsSelection = [...props.mentors];
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentMentor, setCurrentMentor] = useState({});

  // used to dictate when we open modals
  const editingHandler = e => {
    setEditing(!editing);
    console.log(e);
    console.log(showModal);
  };

  // let's us populate the selected user's data into the modal
  const moreInfoHandler = (e, mentorData) => {
    if (showModal) {
      // Closing Modal
      setShowModal(false);
      setCurrentMentor({});
      setEditing(false);
      console.log('this got fired!!!', mentorData);
    } else {
      // Opening Modal
      setShowModal(true);
      setCurrentMentor(mentorData);
    }
  };

  useEffect(() => {
    props.fetchMentors();
  }, []);

  return (
    <>
      <div className="mentorContainer">
        <h1 id="mentorTitle">Mentor Advisor</h1>
      </div>
      <Divider />
      <div className="exploreWrapper">
        <List
          itemLayout="horizontal"
          dataSource={mentorsSelection}
          renderItem={item => (
            <List.Item>
              <div className="listItemWrapper">
                <div className="listItemMeta">
                  <List.Item.Meta
                    avatar={<Avatar src={item.mentor_picture} />}
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
                    classname="listItemButton"
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
      </div>
      <Modal
        className="mentorModal"
        visible={showModal}
        title="Mentor Profile"
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
          editing ? (
            <Button key="submit" type="primary">
              Submit
            </Button>
          ) : (
            <Button key="edit" type="primary">
              Edit
            </Button>
          ),
        ]}
      >
        {editing ? (
          <p>A Mentor form will need to go here</p>
        ) : (
          <p>A mentor profile will need to go here</p>
        )}
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    mentors: state.headmasterReducer.mentors,
  };
};

export default connect(mapStateToProps, { fetchMentors })(Mentors);
