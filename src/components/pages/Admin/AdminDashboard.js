import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import {
  HomeOutlined,
  ProfileOutlined,
  UserSwitchOutlined,
  DatabaseOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import { Link, Route, Switch, NavLink } from 'react-router-dom';
import {
  menuButton,
  menuIcon,
  menuMove,
  Dashboard,
} from './AdminDashboard.style';
import Libraries from './Libraries';
import EditLibrary from './EditLibrary';
import AddLibrary from './AddLibrary';
import './AdminDashboard.css';
import Logout from '../../Logout.js';

export default function AdminDashboard() {
  const [visible, setVisible] = useState(true);
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Dashboard>
        <Switch>
          <Route path="/admin/library/add">
            <AddLibrary />
          </Route>
          <Route path="/admin/library/edit/:id">
            <EditLibrary />
          </Route>
          <Route path="/admin/libraries">
            <Libraries />
          </Route>
          <Route path="/logout" component={Logout} />
        </Switch>
      </Dashboard>
      <div className="admin-dashboard-container">
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          mask={false}
          width={300}
          height={500}
        >
          <h1 style={{ textAlign: 'center' }}>Hello, Administrator!</h1>
          <NavLink to="/dashboard">
            {' '}
            <button className="btn l2-btn menuLinks">
              Home <HomeOutlined />{' '}
            </button>
          </NavLink>
          <NavLink to="/admin/libraries">
            <button className="btn l2-btn menuLinks">
              Libraries <DatabaseOutlined />{' '}
            </button>
          </NavLink>
          <button className="btn l2-btn menuLinks">
            {' '}
            Schools <FolderOpenOutlined />{' '}
          </button>
          <NavLink to="/logout">
            <button className="btn l2-btn menuLinks">
              Logout <LogoutOutlined />
            </button>
          </NavLink>
        </Drawer>
      </div>
    </div>
  );
}
