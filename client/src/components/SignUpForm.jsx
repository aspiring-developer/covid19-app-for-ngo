import React from "react";

const SignUpForm = () => {
  return (
    <>
      <div className="col-sm-12 text-center">
        <form className="signUpForm">
          <h6 className="text-center pb-1">
            Sign up to register a new account
          </h6>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              // value={000}
              // onChange={000}
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group mb-3">
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

          <div className="input-group mb-3">
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
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Confirm Password</span>
            </div>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              name="confirmPassword"
              // value={userObject.confirmPassword}
              // onChange={handleChange}
              placeholder="Re-Enter password"
            />
          </div>
          <div className="text-center buttonWrapper">
            <button
              type="submit"
              // onClick={handleSubmit}
              className="btn btn-info signUpBtn"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
