import {SET_LOADING, SET_MESSAGE, SET_USER, SET_ADMIN_USER} from './types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoading: false,
  role: '',
  error: '',
  type: '',
  isAdmin: false,
  isCorporate: false,
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
        isCorporate: action.isCorporate,
        type: action.type
      }
    case SET_ADMIN_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.token),
        isAdmin: action.isAdmin,
        role: action.role
      }
    default:
      return state;
  }
}