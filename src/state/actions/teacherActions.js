import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { debugLog } from '../../utils/debugMode.js';
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../actions';

export const EDIT_TEACHER_PROFILE = 'EDIT_TEACHER_PROFILE';
export const editTeacherProfile = (id, formData) => async dispatch => {
  console.log(id, formData);
  try {
    const confirmation = await axiosWithAuth().put(`/teacher/${id}`, formData);
    dispatch({ type: EDIT_TEACHER_PROFILE, payload: confirmation });
  } catch {
    throw new Error();
  }
};

export const GET_TEACHER_PROFILE = 'GET_TEACHER_PROFILE';
export const getTeacherProfile = id => async dispatch => {
  try {
    const { data } = await axiosWithAuth().get(`/teacher/${id}`);
    dispatch({ type: GET_TEACHER_PROFILE, payload: data });
  } catch {
    throw new Error();
  }
};

export const initialState = {
  username: '',
  first_name: '',
  last_name: '',
  id: '',
  isFetching: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_USER_SUCCESS:
      // localStorage.setItem("token", JSON.stringify(action.token))
      // localStorage.setItem("userID", action.user.id)
      // console.log(action.payload.token)
      return {
        ...state,
        username: action.user.username,
        first_name: action.user.first_name,
        id: action.user.id,
        isFetching: false,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case REGISTER_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case REGISTER_USER_SUCCESS:
      // localStorage.setItem("token", JSON.stringify(action.token))

      return {
        ...state,
        username: action.user.username,

        id: action.user.id,
        isFetching: false,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
  }
};
