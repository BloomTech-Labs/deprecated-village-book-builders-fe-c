import React, { useEffect, useState } from 'react';
import ComponentTitles from '../../../components/common/ComponentTitles';
import { Divider, Input, Modal, List, Avatar, DatePicker } from 'antd';
import { connect } from 'react-redux';
import {
  checkToken,
  fetchMentees,
  editMentee,
} from '../../../state/actions/index';
import MenteeProfile from '../../../components/pages/Headmaster/Mentees/MenteeProfile';

const StudentOnboarding = props => {
  let menteesSelection = [...props.mentees];
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentMentee, setCurrentMentee] = useState({});

  const searchHandler = e => setSearch(e);

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
  useEffect(() => {
    props.fetchMentees();
  }, []);

  return (
    <div>
      <ComponentTitles titleText="Student Onboarding" />
      <DatePicker
        data-testid="search-bar"
        value={search}
        placeholder="Select your Date of Birth"
        style={{ width: '20%', alignSelf: 'center' }}
        onChange={searchHandler}
        format={'DD/MM/YYYY'}
      />
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
                    ((
                      <a
                        onClick={e => {
                          moreInfoHandler(e, item);
                        }}
                      >
                        {item.first_name + ' ' + item.last_name}
                      </a>
                    ),
                    (<p>{item.d}</p>))
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
                ></button>
              </div>
            </div>
          </List.Item>
        )}
      />
      <Modal
        className="menteeModal"
        visible={showModal}
        title="Mentee Profile"
        onCancel={moreInfoHandler}
        maskClosable
        destroyOnClose
      >
        <MenteeProfile currentMentee={currentMentee} />
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
})(StudentOnboarding);
