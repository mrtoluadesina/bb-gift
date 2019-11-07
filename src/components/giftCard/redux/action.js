import * as types from "./types";
import axios from "axios";
import { BASE_URL } from "../../../common/api";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({
  type: types.SET_ERROR_MESSAGE,
  message
});

export const senderMethod = sender => ({ type: types.SET_SENDER, sender });

export const createGiftCardMethod = giftCards => ({
  type: types.SET_CREATE_GIFTCARD,
  giftCards
});

// Initialize transaction
export const requestGiftCard = payload => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + "/transaction", payload)
    .then(res => {
      console.log(res);
      const token = res.data.token;
      const transactionId = res.data.payload._id;
      // setting values to localstorage
      localStorage.setItem("transactionToken", token);
      localStorage.setItem("transactionId", transactionId);
      // stop loading
      dispatch(loading(false));
      return res;
    })
    .catch(error => {
      dispatch(loading(false));
      const { message } = error;
      dispatch(errorMethod(message));
      // user should be able to retry
    });
};

// Create Giftcard
export const createGiftCard = (payload, token) => dispatch => {
  dispatch(loading(true));
  const config = { headers : { Authorization: `Bearer ${token}` }};
  return axios
  .post(BASE_URL + "/voucher", payload, config)
  .then(res => {
    console.log(res);
    dispatch(loading(false));
    if (res.data.error) throw new Error();
    return res.data;
  })
  .catch (error => {
    dispatch(loading(false));
    const {message} = error;
    dispatch(errorMethod(message));
  })
};
