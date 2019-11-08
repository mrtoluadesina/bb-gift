import * as types from "./types";
import axios from "axios";
import { BASE_URL } from "../../../common/api";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = message => ({
  type: types.SET_ERROR_MESSAGE,
  message
});

export const senderMethod = sender => ({ type: types.SET_SENDER, sender });

export const handleChangeMethod = (index, name, value) => ({
  type: types.HANDLE_CHANGE,
  index,
  name,
  value
});

export const createGiftCardMethod = giftCards => ({
  type: types.SET_CREATE_GIFTCARD,
  giftCards
});

// Initialize transaction
export const requestGiftCard = payload => dispatch => {
  dispatch(loading(true));
  const {sender, amount} = payload;
  const senderDetails = {
    sender,
    amount
  }
  return axios
    .post(BASE_URL + "/transaction", senderDetails)
    .then(res => {
      // setting values to localstorage
      localStorage.setItem("transactionId", res.data.payload._id);
      localStorage.setItem("totalAmount", res.data.payload.amount);
      // send payload to store
      dispatch(createGiftCardMethod(payload.giftCards)); 
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
export const createGiftCard = (payload) => dispatch => {
  dispatch(loading(true));
  return axios
    .post(BASE_URL + "/voucher", payload)
    .then(res => {
      dispatch(loading(false));
      if (res.data.error) throw new Error();
      return res.data;
    })
    .catch(error => {
      dispatch(loading(false));
      const { message } = error;
      dispatch(errorMethod(message));
    });
};
