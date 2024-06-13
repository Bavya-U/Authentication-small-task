import {
    BUYER_LOGIN_REQUEST,
    BUYER_LOGIN_SUCCESS,
    BUYER_LOGIN_ERROR,
  } from "../Action/LoginType";
  
  const initialState = {
    token: null,
    error: null,
    isLoggedIn: false,
    loading: false,
    role: "",
  };
  function BuyerLoginReducer(state = initialState, action) {
    switch (action.type) {
      case BUYER_LOGIN_REQUEST:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case BUYER_LOGIN_SUCCESS:
        return {
          ...state,
          error: null,
          loading: false,
          isLoggedIn: true,
        };
      case BUYER_LOGIN_ERROR:
        return {
          ...state,
          error: action.error,
        };
      default:
        return state;
    }
  }
  export default BuyerLoginReducer;
  