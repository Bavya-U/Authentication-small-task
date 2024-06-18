// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8080"
// const REGISTER_URL = "/api/auth/user/register"
// export const RegisterApi = (input) => {
//   let data = { userName: input.userName, email: input.email, password: input.password }
//   axios.post(REGISTER_URL,data)
// }


import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
const REGISTER_URL = "/api/auth/user/register";

export const RegisterApi = (input) => {
  let data = {
    userName: input.userName,
    email: input.email,
    password: input.password
  };
  
  return axios.post(REGISTER_URL, data);
};
