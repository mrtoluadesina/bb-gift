import {SET_CREATE_GIFTCARD, SET_ERROR_MESSAGE, SET_LOADING, SET_SENDER} from './types';

const initialState = {
  isLoading: false,
  error: "",
  giftCards: [
    {
      message: "",
      amount: "",
      receipient: {
        name: "",
        email: "",
        phone: ""
      }
    }
  ]
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_CREATE_GIFTCARD:
      return {
        ...state,
        giftCards: action.giftCards
      }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        error: action.error
      }
    case SET_SENDER:
      return {
        ...state,
        sender: action.sender
      }
    default:
      return state
  }
}