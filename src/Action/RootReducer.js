import { combineReducers } from "redux";

import BuyerLoginReducer from "../Action/LoginReducer";


const rootReducer = combineReducers({

  BuyerLoginReducer: BuyerLoginReducer,
 

});

export default rootReducer;
