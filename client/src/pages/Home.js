import React from "react";
import "../components/home.css";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="container-fluid mainWrapper text-center">
        <div className="row homeContentsWrapper">
          <Header />
          <hr className="homeHr" />
          <LoginForm />
          <hr className="homeHr" />
          <SignUpForm />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
