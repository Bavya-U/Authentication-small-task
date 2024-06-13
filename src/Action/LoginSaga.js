import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../Action/LoginType";
import { toast } from "react-toastify";
import { BuyerLogin } from "../Service/LoginApi";

function* BuyerLoginSaga({ payload }) {
  try {
    const loginResponse = yield call(BuyerLogin, payload);
    const response = loginResponse.data;
    const JWTToken = response.data.jwt;
    const userId = response.data.userId;
    localStorage.setItem("userId", userId);

    if (JWTToken) {
      localStorage.setItem("token", JWTToken);
    }

    yield put({
      type: Types.BUYER_LOGIN_SUCCESS,
      JWTtoken: JWTToken,
    });
  } catch (error) {
    yield put({
      type: Types.BUYER_LOGIN_ERROR,
      error: toast.error(error.response.data.error.message),
    });
  }
}

function* watchBuyerLogin() {
  yield takeLatest(Types.BUYER_LOGIN_REQUEST, BuyerLoginSaga);
}
export default watchBuyerLogin;
