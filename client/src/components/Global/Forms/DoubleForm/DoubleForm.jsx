import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import SlideCover from "../../../HTMLInteracters/SlideCover/SlideCover";

function DoubleForm() {
    return (
      <div className="relative flex h-3/5 w-2/5 place-content-start">
        {/* MAKE RESPONSIVE HERE */}
        <LoginForm />
        <RegisterForm />
        <SlideCover />
      </div>
    );
  }
  
export default DoubleForm;
  