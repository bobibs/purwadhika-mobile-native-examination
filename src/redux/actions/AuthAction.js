import {
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_LOADING,
  LOGIN_CHECK_ERROR,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_LOADING,
  LOGIN_ACTION_ERROR,
  LOGOUT_ACTION_SUCCESS,
  LOGOUT_ACTION_LOADING,
  LOGOUT_ACTION_ERROR,
} from './types';
import {AsyncStorage} from 'react-native';

// Function Check User Login
export const checkUser = () => {
  console.log('checkUser');
  return async dispatch => {
    dispatch(loginCheckLoading());
    try {
      const userName = await AsyncStorage.getItem('userName');
      console.log(userName);

      if (!userName) {
        return dispatch(loginCheckError());
      }

      dispatch(loginCheckSuccess(userName));
    } catch (error) {
      dispatch(loginCheckError());
    }
  };
};

// Function Login
export const loginUser = inputName => {
  return async dispatch => {
    dispatch(loginActionLoading());
    if (inputName !== '') {
      try {
        await AsyncStorage.setItem('userName', inputName);
        dispatch(loginActionSuccess(inputName));
      } catch (error) {
        dispatch(loginActionError());
      }
    }
  };
};

// Function Logout
export const logoutUser = () => {
  return async dispatch => {
    dispatch(logoutActionLoading());
    try {
      await AsyncStorage.removeItem('userName');
      dispatch(logoutActionSuccess());
    } catch (error) {
      dispatch(logoutActionError());
    }
  };
};

const loginCheckSuccess = data => {
  return {
    type: LOGIN_CHECK_SUCCESS,
    payload: data,
  };
};

const loginCheckLoading = () => {
  return {
    type: LOGIN_CHECK_LOADING,
  };
};

const loginCheckError = () => {
  return {
    type: LOGIN_CHECK_ERROR,
  };
};

const loginActionSuccess = data => {
  return {
    type: LOGIN_ACTION_SUCCESS,
    payload: data,
  };
};

const loginActionLoading = () => {
  return {
    type: LOGIN_ACTION_LOADING,
  };
};

const loginActionError = () => {
  return {
    type: LOGIN_ACTION_ERROR,
  };
};

const logoutActionSuccess = () => {
  return {
    type: LOGOUT_ACTION_SUCCESS,
  };
};

const logoutActionLoading = () => {
  return {
    type: LOGOUT_ACTION_LOADING,
  };
};

const logoutActionError = () => {
  return {
    type: LOGOUT_ACTION_ERROR,
  };
};
