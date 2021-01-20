import {
  GET_STUDENT_PROFILE,
  EDIT_STUDENT_PROFILE,
} from '../actions/studentActions';
import { debugLog } from '../../utils/debugMode.js';
// used example student data as inital state for now, in the future we'd want to make the values empty strings and fetch from endpoints
const initialState = {
  editSuccess: '',
  studentProfile: {
    id: 0,
    first_name: 'Pierce',
    last_name: 'Runolfsdottir',
    gender: 'Male',
    email: 'Odessa67@yahoo.com',
    primary_language: 'Basque',
    dob: '1986-09-12T01:40:09.138Z',
    mentee_picture: 'http://placeimg.com/640/480',
    english_lvl: 10,
    math_lvl: 10,
    reading_lvl: 0,
    school_lvl: 13,
    academic_description:
      'Plastic withdrawal Health violet Anguilla world-class technologies Nebraska Bedfordshire plug-and-play Administrator Administrator target Guilder withdrawal overriding B2B Towels Unbranded Reactive',
    support_needed:
      "national Maryland hacking radical Buckinghamshire up withdrawal 6th transitional hack Lane Eritrea Pa'anga Electronics SDD Personal hour Cotton Rhode Unbranded Metal Naira deliverables Direct Music disintermediate Intranet Alabama parsing Ngultrum compressing Engineer Practical turquoise application",
    availability: {
      time_zone: 'America/Regina',
      as_early_as: '2:00',
      as_late_as: '5:00',
      methods: ['phone', 'email', 'duo'],
    },
    dynamic_questions: [
      {
        qId: 0,
        question: 'My favorite thing to do in my free time is',
        answer:
          'The RAM card is down, navigate the open-source program so we can copy the USB bus!',
      },
      {
        qId: 1,
        question: 'When I grow up, I want to be',
        answer:
          "calculating the application won't do anything, we need to compress the solid state HDD bus!",
      },
      {
        qId: 2,
        question: 'Goals & Dreams Notes',
        answer:
          'The FTP alarm is down, connect the redundant alarm so we can generate the FTP sensor!',
      },
      {
        qId: 3,
        question: 'Personal Struggles Notes',
        answer:
          'If we compress the panel, we can get to the RSS program through the mobile HDD transmitter!',
      },
      {
        qId: 4,
        question: 'Other interests/hobbies',
        answer:
          "connecting the bandwidth won't do anything, we need to hack the redundant AI application!",
      },
      {
        qId: 5,
        question: 'Skills Notes',
        answer:
          'Try to input the TCP matrix, maybe it will transmit the auxiliary port!',
      },
      {
        qId: 6,
        question: 'Family Notes',
        answer:
          "indexing the application won't do anything, we need to override the virtual HDD matrix!",
      },
      {
        qId: 7,
        question: 'Other Notes',
        answer:
          'If we index the alarm, we can get to the XML application through the optical PNG protocol!',
      },
      {
        qId: 8,
        question: 'Admin Notes',
        answer:
          'If we calculate the pixel, we can get to the SCSI application through the mobile SCSI card!',
      },
    ],
  },
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_STUDENT_PROFILE:
      debugLog(action.type, action.payload);
      return {
        ...state,
        editSuccess: action.payload,
      };
    case GET_STUDENT_PROFILE:
      debugLog(action.type, action.payload);
      const studentProfile = {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        primary_language: action.payload.primary_language,
        dob: action.payload.dob,
        mentee_picture: action.payload.mentee_picture,
        english_lvl: action.payload.english_lvl,
        math_lvl: action.payload.math_lvl,
        reading_lvl: action.payload.reading_lvl,
        school_lvl: action.payload.school_lvl,
        academic_description: action.payload.subjects,
        support_needed: action.payload.support_needed,
        availability: action.payload.availability,
        dynamic_questions: action.payload.dynamic_questions,
      };
      return {
        ...state,
        studentProfile,
      };
    default:
      return state;
  }
};

export default studentReducer;
