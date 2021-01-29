import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMentors } from '../../../state/actions/index';
import { Button, Divider, Input, Modal, List, Avatar, Select } from 'antd';

const Mentors = props => {
  let mentorsSelection = [...props.mentors];

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
              <div classname="listItemWrapper">
                <div className="listItemMeta">
                  <List.Item.Meta
                    avatar={<Avatar src={item.mentor_picture} />}
                    title={<a>{item.first_name + ' ' + item.last_name}</a>}
                  />
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    mentors: state.headmasterReducer.mentors,
  };
};

export default connect(mapStateToProps, { fetchMentors })(Mentors);
