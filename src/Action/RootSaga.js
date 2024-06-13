import { all } from "redux-saga/effects";
import watchBuyerLogin from "./LoginSaga";


function* rootSaga() {
  yield all([
    watchBuyerLogin(),
  ]);
}

export default rootSaga;
