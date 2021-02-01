// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file
import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import * as actionTypes from './actionTypes';
let baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080'; // new port for back-end;
export const checkToken = data => dispatch => {
  dispatch({
    type: actionTypes.AUTH_SUCCESS,
    payload: window.localStorage.getItem('token'),
  });
};
// -------------------------
// AUTHORIZATION
// -------------------------
export const login = data => dispatch => {
  axios
    .post(`${baseURL}/users/login`, data)
    .then(res => {
      // console.log('LOGIN ACTION SUCCESS --> token', res.data);
      window.localStorage.setItem('token', res.data.token); // replacing access_token
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: res.data.token,
      });
    })
    .catch(err => {
      console.log(
        'LOGIN ACTION FAILURE--> with this data & baseURL:',
        data,
        baseURL
      );
      console.dir(err);
    });
};
export const logout = () => dispatch => {
  dispatch({ type: actionTypes.AUTH_LOGOUT });
  window.localStorage.removeItem('token');
};
// -----------------------
// HEAD MASTER
// -----------------------
export const editHeadmasterProfile = (id, data) => dispatch => {
  console.log(id, data);
  axiosWithAuth()
    .put(`/headmaster/${id}`, data)
    .then(res => {
      dispatch({
        type: actionTypes.EDIT_HEADMASTER_PROFILE,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};
export const fetchHeadmasterProfile = id => dispatch => {
  axiosWithAuth()
    .get(`/headmaster/${id}`) // change this later
    .then(res => {
      console.log('fetchHeadmasterProfile action --> ', res.data);
      dispatch({
        type: actionTypes.FETCH_HEADMASTER_PROFILE,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};
export const fetchHeadmasterSchool = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_HEADMASTER_SCHOOL });
};
export const fetchVillage = id => dispatch => {
  // console.log("ACTIONSindexFetchVillage --> test", process.env.REACT_APP_BASEURL)
  axiosWithAuth()
    // .get(`${baseURL}/headmaster/village/${id}`)
    .get(`/village/${id}`)
    .then(res => {
      // console.log('IndexActionFetchVillage -> res:', res);
      dispatch({ type: actionTypes.FETCH_VILLAGE, payload: res.data });
    })
    .catch(err => console.dir(err));
};

export const editVillage = (id, data) => dispatch => {
  axiosWithAuth()
    .put(`/village/${id}`, data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: actionTypes.EDIT_VILLAGE,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};
export const fetchMentees = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_MENTEE_START });
  axiosWithAuth()
    .get('/mentee')
    .then(res => {
      dispatch({ type: actionTypes.FETCH_MENTEE_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({ type: actionTypes.FETCH_MENTEE_FAILURE, payload: err })
    );
};

// adding in an action for sending an edited mentee
export const editMentee = (id, data) => dispatch => {
  console.log('editMentee fired:', id, data);
  axiosWithAuth()
    .put(`/mentee/${id}`, data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: actionTypes.EDIT_MENTEE,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};

export const fetchMentors = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_MENTOR_START });
  axiosWithAuth()
    .get('/mentor')
    .then(res => {
      dispatch({ type: actionTypes.FETCH_MENTOR_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({ type: actionTypes.FETCH_MENTOR_FAILURE, payload: err })
    );
};

export const editMentor = (id, data) => dispatch => {
  console.log('editMentor fired:', id, data);
  axiosWithAuth()
    .put(`/mentor/${id}`, data)
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: actionTypes.EDIT_MENTOR,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};

export const fetchSchools = () => dispatch => {
  axiosWithAuth()
    .get(`/school`)
    .then(res => {
      // console.log("FETCH SCHOOLS:", res.data);
      dispatch({
        type: actionTypes.FETCH_HEADMASTER_SCHOOLS,
        payload: res.data,
      });
    })
    .catch(err => {
      // console.log("FETCHSCHOOLS Failed")
      console.dir(err);
    });
};
export const fetchSchool = id => dispatch => {
  axiosWithAuth()
    .get(`/school/${id}`)
    .then(res => {
      // console.log(res.data);
    })
    .catch(err => console.dir(err));
};
export const editSchool = (id, data) => dispatch => {
  axiosWithAuth()
    .put(`/school/${id}`, data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: actionTypes.EDIT_HEADMASTER_SCHOOL,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};
// ----------------
// ADMIN
// ----------------
export const editLibrary = (id, data) => dispatch => {
  axiosWithAuth()
    .put(`/library/${id}`, data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: actionTypes.EDIT_LIBRARY,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};
export const addLibrary = (id, data) => dispatch => {
  axiosWithAuth()
    .post(`/library`, data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: actionTypes.ADD_LIBRARY,
        payload: res.data,
      });
    })
    .catch(err => console.dir(err));
};
