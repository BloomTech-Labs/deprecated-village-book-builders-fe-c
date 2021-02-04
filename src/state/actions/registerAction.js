export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const registerAction = res => {
  return dispatch => {
    dispatch({ type: REGISTER_USER_START });
    dispatch({
      type: REGISTER_USER_SUCCESS,
      token: res.data.token,
      user: res.data.user,
    });
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: `${res}`,
    });
  };
};
