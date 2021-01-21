import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Logout from '../../../Logout';
import MenteeHome from './MenteeHome';

const DashDisplayContainer = styled.div`
  z-index: 1;
  position: absolute;
  left: 20%;
  width: 80%;
  height: auto;
  background: #fffff6;
`;

export default function MenteeDashDisplay(props) {
  return (
    <DashDisplayContainer>
      <Switch>
        <Route exact path="/" component={MenteeHome} />
        <Route path="/Logout" component={Logout} />
      </Switch>
    </DashDisplayContainer>
  );
}
