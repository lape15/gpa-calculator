import React from "react";
import logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <header>
      <div className="img-con">
        <img src={logo} alt="logo" />{" "}
      </div>
      <div className="new-course">
        <div className="span-course">4-point CGPA grading system</div>
      </div>
    </header>
  );
};
export default Header;
