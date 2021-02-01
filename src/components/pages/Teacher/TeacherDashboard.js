import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import {
  Link,
  NavLink,
  // Redirect,
  // BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import Village from '../Village/Village.component.js';
// import VillageForm from '../Village/VillageForm.js';
// import Schools from '../School/Schools.component.js';
// import SchoolForm from '../School/SchoolForm.js';
import TeacherProfile from './TeacherProfile';
import TeacherEditProfile from './TeacherEditProfile';
import StudentOnboarding from './StudentOnboarding';
// import ProfileForm from './HeadmasterProfile/ProfileForm.js';
// import HeadmasterNav from './Drawer';
// import TestComponent from './TestComponent';

import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './TeacherDashboard.css';
import {
  menuButton,
  menuIcon,
  menuMove,
  Dashboard,
} from './TeacherDashboard.style';
import Logout from '../../Logout.js';
// import MentorPairings from './Mentees/Mentees.js';
// import Mentees from './Mentees/Mentees.js';

function TeacherDashboard() {
  const [visible, setVisible] = useState(true);
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 800 || document.documentElement.width <= 800) {
      setDesktop(false);
      setVisible(false);
    } else {
      setDesktop(true);
    }
  }, []);

  const onClose = () => {
    setVisible(false);
  };

  // Todo: this needs to be converted to a mediaquery and removed from here
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 800 || document.documentElement.width <= 800) {
      setDesktop(false);
      setVisible(false);
    } else {
      setDesktop(true);
      setVisible(true);
    }
  });

  return (
    <div>
      <Dashboard>
        <Switch>
          {/* <Route path="/mentor-pairings" component={Mentees} /> */}
          <Route path="/profile/edit/:id">
            <TeacherEditProfile />
          </Route>
          <Route path="/profile/:id">
            <TeacherProfile />
          </Route>
          <Route path="/studentOnboarding" component={StudentOnboarding} />
          <Route exact path="/profile" component={TeacherProfile} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Dashboard>

      {desktop ? null : (
        // inline style to force animation
        <div style={visible ? menuMove : menuIcon}>
          <Button
            type="primary"
            style={menuButton} // inline style to override Ant Design
            onClick={() => setVisible(!visible)}
            icon={<MenuOutlined />}
          >
            Menu
          </Button>
        </div>
      )}
      <div>
        <Drawer
          placement={desktop ? 'left' : 'bottom'}
          closable={false}
          onClose={onClose}
          visible={visible}
          mask={false}
          width={desktop ? 300 : 500}
          height={500}
        >
          <h2>Hello, Teacher!</h2>

          <NavLink to="/dashboard" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Home</button>
          </NavLink>
          <NavLink to="/profile" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Profile</button>
          </NavLink>
          <NavLink to={'/studentOnboarding'} onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Student Onboarding</button>
          </NavLink>
          {/* <NavLink to="/mentor-advisor" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Mentor Advisor</button>
          </NavLink>
          <NavLink to="/school-village" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">School/Village</button>
          </NavLink>
          <NavLink to="/library" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Library</button>
          </NavLink> */}
          <Link to="/logout" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Logout</button>
          </Link>
        </Drawer>

        {/* <HeadmasterNav /> */}
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     loggedIn: state.authReducer.loggedIn,
//     // userId: state.authReducer.userId,
//     // role: state.authReducer.role,
//   };
// };

// export default connect(mapStateToProps, {})(HeadmasterDashboard);
export default TeacherDashboard;
