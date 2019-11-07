import {SET_CREATE_GIFTCARD, SET_ERROR_MESSAGE, SET_LOADING, SET_SENDER, HANDLE_CHANGE} from './types';

const initialState = {
  isLoading: false,
  error: "",
  giftCards: [
    {
      message: "",
      amount: "",
      recipient: {
        name: "",
        email: "",
        phone: ""
      }
    }
  ]
}

const handleGiftCardChange = (state, action) => {
  const giftCards = state.giftCards.slice(0);
  let giftCard = giftCards[action.index];
  giftCard[action.name] = action.value;
  return giftCards;
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
    case HANDLE_CHANGE:
      return {
        ...state,
        giftCards: handleGiftCardChange(state, action)
      }
    default:
      return state
  }
}