import React, { useState, useEffect } from 'react';
import {
  HomeOutlined,
  ProfileOutlined,
  UserSwitchOutlined,
  DatabaseOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
// import { connect } from 'react-redux';
import {
  Link,
  NavLink,
  // Redirect,
  // BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Village from '../Village/Village.component.js';
import VillageForm from '../Village/VillageForm.js';
import Schools from '../School/Schools.component.js';
import SchoolForm from '../School/SchoolForm.js';
import HeadmasterProfile from './HeadmasterProfile/Profile.js';
import ProfileForm from './HeadmasterProfile/ProfileForm.js';
// import HeadmasterNav from './Drawer';
// import TestComponent from './TestComponent';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './HeadmasterDashboard.css';
import {
  menuButton,
  menuIcon,
  menuMove,
  Dashboard,
} from './HeadmasterDashboard.style';
import Logout from '../../Logout.js';
// import MentorPairings from './Mentees/Mentees.js';
import Mentees from './Mentees/Mentees.js';
import Mentors from '../Mentor/Mentors.js';
import MentorPairing from '../Mentor/MentorPairing.js';

function HeadmasterDashboard() {
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
          <Route path="/mentees" component={Mentees} />
          <Route path="/mentor-pairing" component={MentorPairing} />
          <Route exact path="/profile" component={HeadmasterProfile} />
          <Route path="/profile/edit/:id" component={ProfileForm} />
          <Route path="/mentor-advisor" component={Mentors} />
          <Route path="/school-village">
            <Village />
            <Schools />
          </Route>
          <Route
            exact
            path="/village/edit/:villageId"
            component={VillageForm}
          />
          <Route exact path="/school/edit/:schoolId" component={SchoolForm} />
          <Route path="/library" />
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
          <h2 className="vbb-header" style={{ textAlign: 'center' }}>
            Hello, Headmaster!
          </h2>

          <NavLink to="/dashboard" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">
              Home <HomeOutlined />
            </button>
          </NavLink>
          <NavLink to="/profile" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">
              Profile <ProfileOutlined />
            </button>
          </NavLink>
          <NavLink to={'/mentor-pairings'} onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">
              Mentor Pairings <UserSwitchOutlined />
            </button>
          </NavLink>
          <NavLink to={'/mentees'} onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">
              Mentees <UnorderedListOutlined />
            </button>
          </NavLink>
          <NavLink to="/mentor-advisor" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">Mentor Advisor</button>
          </NavLink>
          <NavLink to="/school-village" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">
              School/Village <FolderOpenOutlined />
            </button>
          </NavLink>
          <NavLink to="/library" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">
              Library <DatabaseOutlined />{' '}
            </button>
          </NavLink>
          <Link to="/logout" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">
              Logout <LogoutOutlined />
            </button>
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
export default HeadmasterDashboard;
