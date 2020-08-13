import React from "react";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";
import "../components/home.css";

const Home = () => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <SignUpForm />
      </div>
    </>
  );
};

export default Home;
