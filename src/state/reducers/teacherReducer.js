import {
  GET_TEACHER_PROFILE,
  EDIT_TEACHER_PROFILE,
} from '../actions/teacherActions';
import { debugLog } from '../../utils/debugMode.js';

const initialState = {
  editSuccess: '',
  teacherProfile: {},
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
        teacherId: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        phone: action.payload.phone,
        email: action.payload.email,
        gender: action.payload.gender,
        subjects: action.payload.subjects,
        education: action.payload.highest_degree,
        homeCity: action.payload.home_city,
        homeCountry: action.payload.home_country,
        currentClassroom: action.payload.current_classroom,
        timeZone: action.payload.home_timezone,
        firstLanguage: action.payload.first_language,
        otherLanguages: action.payload.other_languages,
      };
      return {
        ...state,
        teacherProfile: teacherProfile,
      };
    default:
      return state;
  }
};

export default teacherReducer;
