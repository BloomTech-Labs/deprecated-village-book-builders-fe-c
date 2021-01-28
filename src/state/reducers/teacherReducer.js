import {
  GET_TEACHER_PROFILE,
  EDIT_TEACHER_PROFILE,
  CREATE_TEACHER_PROFILE,
} from '../actions/teacherActions';
import { debugLog } from '../../utils/debugMode.js';

const initialState = {
  editSuccess: '',
  teacherProfile: {
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

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TEACHER_PROFILE:
      debugLog(action.type, action.payload);
      return {
        ...state,
        editSuccess: action.payload,
      };
    case GET_TEACHER_PROFILE:
      debugLog(action.type, action.payload);
      const teacherProfile = {
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
        teacherProfile,
      };
    case CREATE_TEACHER_PROFILE:
      debugLog(action.type, action.payload);
      return {
        newTeacherCreate: action.payload,
      };
    default:
      return state;
  }
};

export default teacherReducer;
