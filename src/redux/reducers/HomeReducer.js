import {GET_DATA_SUCCESS, GET_DATA_LOADING} from '../actions/types';

const initialState = {
  dataHomePage: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {...state, dataHomePage: action.payload};

    case GET_DATA_LOADING:
      return {...state, loading: true};

    default:
      return state;
  }
};
