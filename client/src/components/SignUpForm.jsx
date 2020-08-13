import React from "react";

const SignUpForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 formCol">
          <h5 className="text-center pb-4">
            Sign up to register and create your account.
          </h5>
          <form>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
