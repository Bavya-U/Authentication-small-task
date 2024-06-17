import React, { useState } from "react";
import "./RegistorPage.css";
function RegistorPage() {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    name: { required: false },
    custom_error: null,
  };
  const [errors, setErrors] = useState(initialStateErrors);
  const [Loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = initialStateErrors;
    if (input.name == "") {
      errors.name.required = true;
    }
    if (input.email == "") {
      errors.email.required = true;
    }
    if (input.password == "") {
      errors.password.required = true;
    }
    setErrors(errors);
  };

  const [input, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInput = (event) => {
    setInputs({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <section className="register-block">
      <div className="container">
        <div className="row ">
          <div className="col register-sec">
            <h2 className="text-center">Register Now</h2>
            <form onSubmit={handleSubmit} className="register-form" action="">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                  name="name"
                  id=""
                />
                {errors.name.required ? (
                  <span className="text-danger">Name is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">
                  Email
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                  name="email"
                  id=""
                />
                {errors.email.required ? (
                  <span className="text-danger">Email is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="text-uppercase"
                >
                  Password
                </label>
                <input
                  className="form-control"
                  onChange={handleInput}
                  type="password"
                  name="password"
                  id=""
                />
                {errors.password.required ? (
                  <span className="text-danger">Password is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                {errors.custom_error ? (
                  <span className="text-danger">
                    <p>{errors.custom_error}</p>
                  </span>
                ) : null}

                {Loading ? (
                  <div className="text-center">
                    <div className="spinner-border text-primary " role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : null}

                <input
                  type="submit"
                  className="btn btn-login float-right btn-primary"
                  value="Register"
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                Already have account ? Please <a href="#">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistorPage;
