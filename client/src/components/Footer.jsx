import React from "react";

const date = new Date();
const fullYear = date.getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="col-sm-12 mt-4 py-2">
        <p>
          &copy;{fullYear} &bull; Damauli Children Organization &bull; A not for
          profit organization working for children welfare
        </p>
      </footer>
    </>
  );
};

export default Footer;
