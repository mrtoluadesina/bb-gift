import {SET_LOADING, SET_MESSAGE, SET_USER} from './types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoading: false,
  error: '',
  isAdmin: false,
  isAuthenticated: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_MESSAGE:
      return {
        ...state,
        error: action.error
      }
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.token),
        isAdmin: action.isAdmin
      }
    default:
      return state;
  }
}