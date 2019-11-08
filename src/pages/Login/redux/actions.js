import * as types from './types';
import axios from 'axios';
import {BASE_URL} from '../../../common/api';
import setAuthorizationToken from '../../../helperFunctions/setAuthorizationToken';

export const setUser = (token, isAdmin) => ({ type: types.SET_USER, token, isAdmin});

export const loading = isLoading => ({type: types.SET_LOADING, isLoading});

export const errorMethod = message => ({type: types.SET_MESSAGE, message});

export const login = payload => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + "/auth/corporate_login", payload)
}

export const adminLogin = payload => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + "/auth/admin_login", payload)
    
}