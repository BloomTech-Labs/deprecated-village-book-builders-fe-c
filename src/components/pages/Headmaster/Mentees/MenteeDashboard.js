import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MenteeMenu from './MenteeMenu';
import Logout from '../../../Logout';

export default function MenteeDashboard(props) {
  return (
    <div>
      <Switch>
        <Route path="/Logout" component={Logout} />
      </Switch>
      <MenteeMenu />
    </div>
  );
}
