import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../state/reducers';
import StudentDashboard from '../components/pages/Student/StudentDashboard';

describe('Render Student Dashboard', () => {
  test('it should mount a div based on props', () => {
    const store = createStore(reducer, applyMiddleware(thunk));
    const { container, getByText } = render(
      <Provider store={store}>
        <Router>
          <StudentDashboard />
        </Router>
      </Provider>
    );
    const welcomMessage = getByText(/Hello, Student!/i);
    expect(welcomMessage.textContent).toBe('Hello, Student!');
  });
});
