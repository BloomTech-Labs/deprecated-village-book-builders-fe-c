import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../state/reducers';
import Mentees from '../components/pages/Headmaster/Mentees/Mentees';

describe('Mentee Managment page from headmaster profile', () => {
  window.matchMedia =
    window.matchMedia ||
    function() {
      return {
        matches: false,
        addListener: function() {},
        removeListener: function() {},
      };
    };
  test('Search bar should default to search by name', () => {
    const store = createStore(reducer, applyMiddleware(thunk));
    const { container, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Mentees />
        </Router>
      </Provider>
    );
    const search = getByTestId('search-bar');
    expect(search.placeholder).toBe('name');
  });
});
