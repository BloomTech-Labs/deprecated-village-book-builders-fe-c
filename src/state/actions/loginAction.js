export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const loginAction = res => {
  return dispatch => {
    dispatch({ type: LOGIN_USER_START });
    dispatch({
      type: LOGIN_USER_SUCCESS,
      token: res.data.token,
      user: res.data.user,
    });
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: `${res}`,
    });
  };
};
