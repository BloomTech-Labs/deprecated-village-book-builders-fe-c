import { EDIT_TEACHER_PROFILE } from '../actions/';
import { debugLog } from '../../utils/debugMode.js';

const initialState = {
  editSuccess: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TEACHER_PROFILE:
      debugLog(action.type, action.payload);
      return {
        ...state,
        editSuccess: action.payload,
      };
    default:
      return state;
  }
};
