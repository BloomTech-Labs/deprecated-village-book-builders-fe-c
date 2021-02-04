import React, { useEffect, useState } from 'react';

import { Divider, Input, Modal, List, Avatar, Select } from 'antd';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';
import { connect } from 'react-redux';
import {
  checkToken,
  fetchMentees,
  editMentee,
  fetchMentors,
} from '../../../../state/actions/index';
import MenteeTable from './MenteeTable';
import MentorTable from './MentorTable';
import { useHistory } from 'react-router-dom';

const MatchingPage = props => {
  let mentees = [...props.mentees];
  let mentors = [...props.mentors];
  console.log('second', props);

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [menteeData, setMenteeData] = useState(mentees);
  const [mentorData, setMentorData] = useState(mentors);
  const [searchBy, setSearchBy] = useState('Name');
  const history = useHistory();
  const [toggle, setToggle] = useState(true);

  const searchHandler = e => setSearch(e.target.value);

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
  if (Array.isArray(mentees) && searchBy == 'Name') {
    mentees = mentees.filter(
      item =>
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.last_name.toLowerCase().includes(search.toLowerCase())
    );
  } else if (Array.isArray(mentees) && searchBy == 'YYYY-MM-DD') {
    mentees = mentees.filter(item => item.dob.includes(search));
  } else if (Array.isArray(mentees) && searchBy == 'Email') {
    mentees = mentees.filter(item =>
      item.email.toLowerCase().includes(search.toLowerCase())
    );
  } else if (Array.isArray(mentees) && searchBy == 'Timezone') {
    mentees = mentees.filter(item =>
      item.availability.time_zone.toLowerCase().includes(search.toLowerCase())
    );
    // this dynamically filters grades by the selected class. The 'searchBy' strings must match the corresonding value on the selectBy options as we're just slicing the string as it's passed in.
  } else if (
    Array.isArray(mentees) &&
    (searchBy == 'Min English grade' ||
      'Min Math grade' ||
      'Min Reading grade' ||
      'Min School grade')
  ) {
    let sliced = searchBy.toLowerCase().split(' ');
    let searchTerm = sliced[1] + '_lvl';
    mentees = mentees.filter(item => item[searchTerm] >= search);
  }

  useEffect(() => {
    props.fetchMentees();
  }, [showModal]);

  useEffect(() => {
    props.fetchMentors();
  }, [showModal]);

  const toggleView = event => {
    setToggle(!toggle);
  };
  console.log(mentees, mentors);

  return (
    mentees.length && (
      <div className="menteeContainer">
        <h1 id="menteeTittle">Mentee Management</h1>
        <div className="exploreWrapper">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        </div>

        <div className="matchApp">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={toggleView}>toggle mentor/mentee view</button>
          </div>
          {toggle ? (
            // <div>mentee table</div>
            <>
              <MenteeTable mentees={[...mentees]} mentors={[...mentors]} />
            </>
          ) : (
            // <div>mentor table</div>
            <>
              <MentorTable mentors={[...mentors]} mentees={[...mentees]} />
            </>
          )}
        </div>
      </div>
    )
  );
};

const mapStateToProps = state => {
  return {
    mentees: state.headmasterReducer.mentees,
    mentors: state.headmasterReducer.mentors,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
  };
};

export default connect(mapStateToProps, {
  checkToken,
  fetchMentees,
  editMentee,
  fetchMentors,
})(MatchingPage);

// import React, { useEffect, useState } from "react";
// import { connect } from 'react-redux';
// import MenteeTable from "./MenteeTable";
// import MentorTable from "./MentorTable";
// import { fetchMentees, fetchMentors } from '../../../../state/actions/index';

// // import "./styles.css";

// const MatchingPage = (props) => {
//    let mentees = [...props.mentees];
//     console.log(mentees)
//   const [menteeData, setMenteeData] = useState([]);
//   const [mentorData, setMentorData] = useState([]);
//   const [toggle, setToggle] = useState(true);

//   useEffect(()=>{
//       fetchMentees()
//       console.log("hello", fetchMentees())
//   }, [])

//   const toggleView = (event) => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className="App">
//       <h2>Click the button to see some magic happen!</h2>
//       <button onClick={toggleView}>toggle mentor/mentee view</button>
//       <br></br>
//       <br></br>
//       <button>Sort it!</button>
//       {toggle ? (
//         <MenteeTable mentees={menteeData} mentors={mentorData} />
//       ) : (
//         <MentorTable mentors={mentorData} mentees={menteeData} />
//       )}
//     </div>
//   );
// }

// const mapStateToProps = state => {
//     return {
//       mentees: state.headmasterReducer.mentees,
//       userId: state.authReducer.userId,
//       role: state.authReducer.role,
//     };
//   };

//   export default connect(mapStateToProps, {
//     fetchMentees,
//     // fetchMentors
//   })(MatchingPage);
