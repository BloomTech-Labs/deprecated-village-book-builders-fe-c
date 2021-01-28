import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { debugLog } from '../../utils/debugMode.js';

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
