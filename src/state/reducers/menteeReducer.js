import {
  GET_MENTEE_PROFILE,
  EDIT_MENTEE_PROFILE,
} from '../actions/menteeActions';
import { debugLog } from '../../utils/debugMode.js';

const initialState = {
  editSuccess: '',
  menteeProfile: {
    imgURL: '',
    name: '',
    contact: '',
    bio: '',
    education: '',
    location: '',
    subjects: '',
    funFact: '',
  },
};

const menteeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MENTEE_PROFILE:
      debugLog(action.type, action.payload);
      return {
        ...state,
        editSuccess: action.payload,
      };
    case GET_MENTEE_PROFILE:
      debugLog(action.type, action.payload);
      const menteeProfile = {
        imgURL: action.payload.imgURL,
        name: action.payload.name,
        contact: action.payload.contact,
        bio: action.payload.bio,
        education: action.payload.education,
        location: action.payload.location,
        subjects: action.payload.subjects,
        funFact: action.payload.funFact,
      };
      return {
        ...state,
        menteeProfile,
      };
    default:
      return state;
  }
};

export default menteeReducer;
