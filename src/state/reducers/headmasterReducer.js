// Reducer file for Headmaster

import {
  FETCH_HEADMASTER_SCHOOLS,
  FETCH_VILLAGE,
  FETCH_HEADMASTER_PROFILE,
  FETCH_MENTEE_SUCCESS,
  FETCH_MENTEE_FAILURE,
  FETCH_MENTEE_START,
  FETCH_MENTOR_SUCCESS,
  EDIT_MENTOR,
} from '../actions/actionTypes';

import { debugLog } from '../../utils/debugMode.js';

const initialState = {
  villageData: {},
  schoolData: [],
  headmasterProfile: '',
  mentees: [],
  mentors: [],
};
// Fetch school data for headmaster
const reducer = (state = initialState, action) => {
  // console.log('HEADMASTERREDUCER.js, action type & payload:', action.type, action.payload);
  switch (action.type) {
    case FETCH_HEADMASTER_SCHOOLS:
      debugLog(action.type, action.payload);
      return { ...state, schoolData: action.payload };
    case FETCH_HEADMASTER_PROFILE:
      debugLog(action.type, action.payload);
      return { ...state, headmasterProfile: action.payload };
    case FETCH_VILLAGE:
      debugLog(action.type, action.payload);
      return {
        ...state,
        villageData: action.payload,
      };
    case FETCH_MENTEE_SUCCESS:
      debugLog(action.type, action.payload);
      return {
        ...state,
        mentees: action.payload,
      };
    case FETCH_MENTEE_START:
      debugLog(action.type, action.payload);
      return { ...state };
    case FETCH_MENTEE_FAILURE:
      debugLog(action.type, action.payload);
      return { ...state };
    case FETCH_MENTOR_SUCCESS:
      debugLog(action.type, action.payload);
      return {
        ...state,
        mentors: action.payload,
      };
    case EDIT_MENTOR:
      debugLog(action.type, action.payload);
      const updatedMenors = state.mentors.map((item, index) => {
        if (item.id == action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return { ...state, mentors: updatedMenors };
    default:
      return state;
  }
};

export default reducer;
