import React, { useState, useEffect } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import StudentProfile from './StudentProfile/Profile';
import {
  HomeOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import ProfileForm from './StudentProfile/ProfileForm';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../Headmaster/HeadmasterDashboard.css';
import {
  menuButton,
  menuIcon,
  menuMove,
  Dashboard,
} from './StudentDashboard.style';
import Logout from '../../Logout.js';

function StudentDashboard() {
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
          <Route exact path="/profile" component={StudentProfile} />
          <Route path="/profile/edit/:id" component={ProfileForm} />
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
          <h2>Hello, Student!</h2>

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
          <Link to="/logout" onClick={() => setVisible(true)}>
            <button className="btn l2-btn menuLinks">
              Logout <LogoutOutlined />
            </button>
          </Link>
        </Drawer>
      </div>
    </div>
  );
}

export default StudentDashboard;

// cloned same format as headmaster dashboard with only visible profile view and ability to edit profile
