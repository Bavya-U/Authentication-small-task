import axios from "axios";
import { environment } from "../Environment/Environment";

const baseURL = environment.serverURL;

const getBuyerLoginAuthURL = baseURL + "/api/auth/user/register";

export function BuyerLogin(request) {
  return axios({
    method: "POST",
    url: getBuyerLoginAuthURL,
    headers: {
      "Content-Type": "application/json",
    },
    data: request,
  });
}
