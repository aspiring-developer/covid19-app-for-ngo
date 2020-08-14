import React from "react";

const LoginForm = () => {
  return (
    <>
      <div className="col-sm-12 text-center">
        <form className="loginForm">
          <h6 className="text-center pb-1">Login to your account</h6>
          <div className="row">
            <div className="col-sm-6 input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Email</span>
              </div>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                // value={userObject.email}
                // onChange={handleChange}
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>

            <div className="col-sm-6 input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Password</span>
              </div>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                // value={userObject.password}
                // onChange={handleChange}
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="text-center buttonWrapper">
            <button
              type="submit"
              // onClick={handleSubmit}
              className="btn btn-info loginBtn"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
