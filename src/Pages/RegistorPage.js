// import React, { useState } from "react";
// import "./RegistorPage.css";
// import { RegisterApi } from "../Service/Api";

// function RegistorPage() {
//   const initialStateErrors = {
//     email: { required: false },
//     password: { required: false },
//     userName: { required: false },
//     custom_error: null,
//   };

//   const [errors, setErrors] = useState(initialStateErrors);
//   const [loading, setLoading] = useState(false);
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//     userName: "",
//   });

//   const handleInput = (event) => {
//     setInput({ ...input, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let updatedErrors = { ...initialStateErrors };
//     let isValid = true;

//     if (input.userName === "") {
//       updatedErrors.userName.required = true;
//       isValid = false;
//     }
//     if (input.email === "") {
//       updatedErrors.email.required = true;
//       isValid = false;
//     }
//     if (input.password === "") {
//       updatedErrors.password.required = true;
//       isValid = false;
//     }

//     setErrors(updatedErrors);

//     if (isValid) {
//       setLoading(true);
//       // Submit form or any further processing here
//       // Simulate an API call
//       RegisterApi(input).then((Response) => {
//         console.log(Response);
//       }).catch((err) => {
//         console.log(err);
//       }).finally(() => {
//         // setTimeout(() => {
//           setLoading(false);
//         //   alert("Registered successfully!");
//         // }, 2000);
//       })
     
//     }
//   };

//   return (
//     <section className="register-block">
//       <div className="container">
//         <div className="row">
//           <div className="col register-sec">
//             <h2 className="text-center">Register Now</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name" className="text-uppercase">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   onChange={handleInput}
//                   name="userName"
//                   id="name"
//                   value={input.userName}
//                 />
//                 {errors.name.required && (
//                   <span className="text-danger">Name is required.</span>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email" className="text-uppercase">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   onChange={handleInput}
//                   name="email"
//                   id="email"
//                   value={input.email}
//                 />
//                 {errors.email.required && (
//                   <span className="text-danger">Email is required.</span>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password" className="text-uppercase">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   onChange={handleInput}
//                   name="password"
//                   id="password"
//                   value={input.password}
//                 />
//                 {errors.password.required && (
//                   <span className="text-danger">Password is required.</span>
//                 )}
//               </div>
//               <div className="form-group">
//                 {errors.custom_error && (
//                   <span className="text-danger">
//                     <p>{errors.custom_error}</p>
//                   </span>
//                 )}

//                 {loading && (
//                   <div className="text-center">
//                     <div className="spinner-border text-primary" role="status">
//                       <span className="sr-only">Loading...</span>
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   className="btn btn-login float-right btn-primary"
//                   disabled={loading}
//                 >
//                   Register
//                 </button>
//               </div>
//               <div className="clearfix"></div>
//               <div className="form-group">
//                 Already have an account? Please <a href="/">Login</a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RegistorPage;



import React, { useState } from "react";
import "./RegistorPage.css";
import { RegisterApi } from "../Service/Api";

function RegistorPage() {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    userName: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let updatedErrors = { ...initialStateErrors };
    let isValid = true;

    if (input.userName === "") {
      updatedErrors.userName.required = true;
      isValid = false;
    }
    if (input.email === "") {
      updatedErrors.email.required = true;
      isValid = false;
    }
    if (input.password === "") {
      updatedErrors.password.required = true;
      isValid = false;
    }

    setErrors(updatedErrors);

    if (isValid) {
      setLoading(true);
      try {
        const response = await RegisterApi(input);
        console.log(response);
        // Perform additional actions on successful registration, like redirecting
        alert("Registered successfully!");
      } catch (err) {
        console.log(err);
        setErrors((prevErrors) => ({
          ...prevErrors,
          custom_error: "Registration failed. Please try again."
        }));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="register-block">
      <div className="container">
        <div className="row">
          <div className="col register-sec">
            <h2 className="text-center">Register Now</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="text-uppercase">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                  name="userName"
                  id="name"
                  value={input.userName}
                />
                {errors.userName.required && (
                  <span className="text-danger">Name is required.</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={handleInput}
                  name="email"
                  id="email"
                  value={input.email}
                />
                {errors.email.required && (
                  <span className="text-danger">Email is required.</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-uppercase">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={handleInput}
                  name="password"
                  id="password"
                  value={input.password}
                />
                {errors.password.required && (
                  <span className="text-danger">Password is required.</span>
                )}
              </div>
              <div className="form-group">
                {errors.custom_error && (
                  <span className="text-danger">
                    <p>{errors.custom_error}</p>
                  </span>
                )}

                {loading && (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-login float-right btn-primary"
                  disabled={loading}
                >
                  Register
                </button>
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                Already have an account? Please <a href="/">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistorPage;
