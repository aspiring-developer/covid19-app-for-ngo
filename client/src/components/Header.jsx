import React from "react";
const Header = () => {
  return (
    <>
      <header className="col header d-flex justify-content-center align-items-center">
        <div className="col-sm-12">
          <img
            src="/images/dco-logo-100x53.png"
            className="dcoLogo d-inline-block"
            alt="DCO logo"
          />
          <h5> Damauli Children Organization</h5>
          <h4> COVID-19 Information Center </h4>
        </div>
      </header>
    </>
  );
};

export default Header;
