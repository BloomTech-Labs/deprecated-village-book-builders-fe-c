import React, { useState, useEffect } from 'react';
import { List, Button, Avatar, Table, TimePicker } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';

import moment from 'moment';
import axios from 'axios';
const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [mentees, setMentees] = useState([]);
  const [timeValue, setTimeValue] = useState(null);
  const { RangePicker } = TimePicker;

  useEffect(() => {
    if (timeValue)
      setMentors(
        mentors.filter(item => item.availability.as_early_as >= timeValue)
      );
  }, [timeValue]);

  const onChange = (value, dateString) => {
    setTimeValue(dateString[1]);
  };

  // const changeTime = (value, dateString) => {
  //     console.log('Selected Time: ', value);
  //     console.log('Formatted Selected Time: ', dateString)
  //     const timL= mentors.map(item=> { return new Date(`${item.availability.as_early_as}`).getTime()} )
  //     const newL = [...mentors].filter(item=>new Date(item.availability.as_early_as).getTime()>= new Date(dateString[0]).getTime() )
  //     console.log(newL)
  // }
  // e, s, v , phil,
  const columns = [
    {
      title: 'From',
      dataIndex: 'as_early_as',
      key: 'as_early_as',
    },
    {
      title: 'Until',
      dataIndex: 'as_late_as',
      key: 'as_late_as',
    },
  ];

  useEffect(() => {
    axios
      .get('http://localhost:8080/mentor')
      .then(res => setMentors(res.data))
      .catch(err => console.log(err));
    axios
      .get('http://localhost:8080/mentee')
      .then(res => setMentees(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="menteeContainer">
      <h1 id="menteeTittle">Mentor Pairings</h1>
      <div style={{}}>
        <RangePicker onChange={onChange} showTime={{ format: 'HH:mm' }} />
        <div style={{ display: 'flex' }}>
          <List
            grid={{
              gutter: 20,
              column: 3,
            }}
            style={{ width: '80%' }}
            dataSource={mentors}
            renderItem={item => (
              <List.Item>
                <div className="listItemWrapper">
                  <div className="listItemMeta">
                    <List.Item.Meta
                      style={{ textAlign: 'center' }}
                      // avatar={<Avatar src={item.mentor_picture} />}
                      title={
                        <a
                          onClick={e => {
                            console.log(e);
                          }}
                        >
                          {item.first_name + ' ' + item.last_name}{' '}
                          <InfoCircleFilled />
                        </a>
                      }
                      description={
                        <Table
                          align="center"
                          textAlign="center"
                          pagination={false}
                          size="small"
                          tableLayout="fixed"
                          dataSource={[item.availability]}
                          columns={columns}
                          key="table"
                        />
                      }
                    />
                  </div>
                  {/* <div className="listItemButtonWrapper">
                  <Button
                    onClick={e => console.log(e)}
                    className="listItemButton"
                    size="middle"
                    type="default"
                  >
                    More Info
                  </Button>
                </div> */}
                </div>
              </List.Item>
            )}
          />

          <List
            itemLayout="grid"
            dataSource={mentees}
            style={{ width: '80%', marginLeft: '3px' }}
            renderItem={item => (
              <List.Item>
                <div className="listItemWrapper">
                  <div className="listItemMeta">
                    <List.Item.Meta
                      avatar={<Avatar src={item.mentee_picture} />}
                      title={
                        <a
                          onClick={e => {
                            console.log(e);
                          }}
                        >
                          {item.first_name + ' ' + item.last_name}
                        </a>
                      }
                      description={
                        <Table
                          align="center"
                          pagination={false}
                          size="small"
                          tableLayout="fixed"
                          dataSource={[item.availability]}
                          columns={columns}
                          key="table"
                        />
                      }
                    />
                  </div>
                  <div className="listItemButtonWrapper">
                    <Button
                      onClick={e => console.log(e)}
                      className="listItemButton"
                      size="middle"
                      type="default"
                    >
                      More Info
                    </Button>
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Mentors;
