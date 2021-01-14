import { axiosWithAuth } from '../../utils';
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
