import * as Types from "../Action/LoginType";

function BuyerLoginAction(Buyerdata) {
  return {
    type: Types.BUYER_LOGIN_REQUEST,
    payload: Buyerdata,
  };
}
export default BuyerLoginAction;