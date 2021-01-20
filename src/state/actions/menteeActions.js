import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { debugLog } from '../../utils/debugMode.js';

export const EDIT_MENTEE_PROFILE = 'EDIT_MENTEE_PROFILE';
export const editMenteeProfile = (id, formData) => dispatch => {
  axiosWithAuth()
    .put(`/headmaster/mentees/${id}`, formData)
    .then(response => {
      console.log('Edit teacher response', response);
      dispatch({ type: EDIT_MENTEE_PROFILE, payload: response });
    })
    .catch(error => {
      console.log(error);
    });
};

export const GET_MENTEE_PROFILE = 'GET_MENTEE_PROFILE';
export const getMenteeProfile = id => async dispatch => {
  const menteeProfile = await axiosWithAuth().get(`/headmaster/mentees/${id}`);
  dispatch({ type: GET_MENTEE_PROFILE, payload: menteeProfile });
};
