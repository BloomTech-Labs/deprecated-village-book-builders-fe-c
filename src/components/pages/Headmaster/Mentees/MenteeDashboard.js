import React from 'react';

import MenteeMenu from './MenteeMenu';
import MenteeDashDisplay from './MenteeDashDisplay';

export default function MenteeDashboard(props) {
  return (
    <div>
      <MenteeMenu />
      <MenteeDashDisplay />
    </div>
  );
}
