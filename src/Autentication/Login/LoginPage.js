// import React from 'react'
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// function LoginPage() {
//   return (
// <div className="container shadow-lg d-flex align-items-center justify-content-center col-md-5 mt-5">
//       <div className=''>
//         <div className="forms-container">
//           <div className="signin-signup">
//             <form
//               action="/home"
//               className="buyer-sign-in-form"
              
//             >
//               <h2 className="title fw-bold mb-5">SIGN IN</h2>
//               <div className="input-field">
//                 <i className="pi pi-user "></i>
//                 <input
//                   type="text"
//                   placeholder="Username"
                 
//                 />
//               </div>
//               <div className="input-field">
//                 <i className="pi pi-lock "></i>
//                 <input
//                   type="password"
//                   placeholder="Password"
                
//                 />
//               </div>
//               <input
//                 type="submit"
//                 value="Login"
//                 className="btn-buyer fw-bold rounded-pill"
//               />
//               <p className="social-text">Or Sign in with social platforms</p>
           
//             </form>
//           </div>
//         </div>

      
//       </div>
//     </div>
//   )
// }

// export default LoginPage



import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import BuyerLoginAction from "../../Action/LoginAction";


function BuyerAuthentication({ isLoggedIn }) {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const Buyerdata = {
      userName: userName,
      password: password, 
    };
    dispatch(BuyerLoginAction(Buyerdata));
    console.log("Buyerdata", Buyerdata);
    e.preventDefault();
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setFormSubmitted(false);
    }
  });

  useEffect(() => {
    setFormSubmitted(isLoggedIn);
  }, [isLoggedIn]);




  return (
    <div className="login">
      <div className={`left_div shadow-lg`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="/home"
              className="buyer-sign-in-form"
              onSubmit={handleSubmit}
            >
              <h2 className="title fw-bold mb-5">SIGN IN</h2>
              <div className="input-field">
                <i className="pi pi-user "></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="pi pi-lock "></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Login"
                className="btn-buyer fw-bold rounded-pill"
              />
              <p className="social-text">Or Sign in with social platforms</p>
           
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.BuyerLoginReducer.loading,
    jwtToken: state.BuyerLoginReducer.JWTtoken,
    isLoggedIn: state.BuyerLoginReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps)(BuyerAuthentication);
