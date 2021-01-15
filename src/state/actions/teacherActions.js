import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { debugLog } from '../../utils/debugMode.js';

export const EDIT_TEACHER_PROFILE = 'EDIT_TEACHER_PROFILE';
export const editTeacherProfile = (id, formData) => dispatch => {
  axiosWithAuth()
    .put(`/teacher/${id}`, formData)
    .then(response => {
      console.log('Edit teacher response', response);
      dispatch({ type: EDIT_TEACHER_PROFILE, payload: response });
    })
    .catch(error => {
      console.log(error);
    });
};

export const GET_TEACHER_PROFILE = 'GET_TEACHER_PROFILE';
export const getTeacherProfile = id => async dispatch => {
  const teacherProfile = await axiosWithAuth().get(`/teacher/${id}`);
  dispatch({ type: GET_TEACHER_PROFILE, payload: teacherProfile });
};
