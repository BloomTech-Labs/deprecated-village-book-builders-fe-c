import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import '../style.css';
// import PrivateRoute from "../utils/PrivateRoute";
import { checkToken } from '../state/actions/index';
import Login from './pages/Login/Login';
import HeadmasterDashboard from './pages/Headmaster/HeadmasterDashboard';
import Profile from '../components/pages/Headmaster/HeadmasterProfile/Profile';
import ProfileForm from '../components/pages/Headmaster/HeadmasterProfile/ProfileForm';
import AdminDashboard from './pages/Admin/AdminDashboard';
import TeacherProfile from './pages/Teacher/TeacherProfile';
import TeacherEditProfile from './pages/Teacher/TeacherEditProfile';
import StudentDashboard from './pages/Student/StudentDashboard';
import MenteeDashboard from './pages/Headmaster/Mentees/MenteeDashboard';
import StudentOnboarding from './pages/Student/StudentOnboarding';

const App = ({ role, checkToken }) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/headmaster/edit">
          <ProfileForm />
        </Route>
        <Route path="/headmaster">
          <Profile />
        </Route>
        {/*Teacher Routes*/}
        <Route path="/teacher/edit/:id">
          <TeacherEditProfile />
        </Route>
        <Route path="/teacher/:id">
          <TeacherProfile />
        </Route>
        <Route path="/student-onboarding">
          <StudentOnboarding />
        </Route>

        <Route path="/">
          {/*//! this needs to be changed to if there is an unexpired token*/}
          {/* Look for token in case a user refreshes the page & clears redux store, then it repopulates the redux store with userId, role & loggedIn status with checkToken().  */}
          {localStorage.getItem('token') ? (
            <>
              {checkToken()}
              {/* //once we make a reusable dashboard/sidebar, this is where we would put it, passing in the role as props to fill it out accordingly. */}
              {role === 'headmaster' && <HeadmasterDashboard />}
              {role === 'admin' && <AdminDashboard />}

              {/* checks token to see if role is mentee. credentials to check with -> mentees@mentees.com : password */}
              {role === 'student' && <StudentDashboard />}
              {role === 'mentee' && <MenteeDashboard />}
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // loggedIn: state.authReducer.loggedIn,
    // userId: state.authReducer.userId,
    role: state.authReducer.role,
  };
};

export default connect(mapStateToProps, { checkToken })(App);
