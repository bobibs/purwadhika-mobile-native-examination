import {
  LOGIN_CHECK_LOADING,
  LOGIN_CHECK_SUCCESS,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_LOADING,
  LOGOUT_ACTION_SUCCESS,
  LOGOUT_ACTION_LOADING,
} from '../actions/types';

const initialState = {
  userName: '',
  loginStatus: false,
  logoutStatus: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CHECK_SUCCESS:
      return {...initialState, userName: action.payload, loginStatus: true};

    case LOGIN_CHECK_LOADING:
      return {...state, loading: true};

    case LOGIN_ACTION_SUCCESS:
      console.log('reducer', action.payload);
      return {...state, userName: action.payload};

    case LOGIN_ACTION_LOADING:
      return {...state, loading: true};

    case LOGOUT_ACTION_SUCCESS:
      return {...state, logoutStatus: true};

    case LOGOUT_ACTION_LOADING:
      return {...state, loading: true};

    default:
      return state;
  }
};
