import {GET_DATA_SUCCESS, GET_DATA_LOADING, GET_DATA_ERROR} from './types';
import Axios from 'axios';
import {API_URL, API_KEY} from '../../api';

// Function Get Data For Homepage
export const getDataHomePage = () => {
  const headers = {
    'user-key': `${API_KEY}`,
  };
  return dispatch => {
    dispatch(getDataLoading());
    Axios.get(`${API_URL}/search?start=1&count=10&sort=rating`, {headers})
      .then(res => {
        if (res.data) {
          dispatch(getDataSuccess(res.data));
        } else {
          dispatch(getDataError());
        }
      })
      .catch(err => console.log(err));
  };
};

const getDataSuccess = data => {
  return {
    type: GET_DATA_SUCCESS,
    payload: data,
  };
};

const getDataLoading = () => {
  return {
    type: GET_DATA_LOADING,
  };
};

const getDataError = () => {
  return {
    type: GET_DATA_ERROR,
  };
};
