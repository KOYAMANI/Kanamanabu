import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import SlideCover from "../../../HTMLInteracters/SlideCover/SlideCover";

function DoubleForm() {

  const show = "all"
  const [login, setLogin] = useState(true);

    return (
      <div className="relative flex h-3/5 w-2/5 place-content-start">
        {/* MAKE RESPONSIVE HERE */}
        <LoginForm visible={login} switcher={() => setLogin(!login)}/>
        <RegisterForm visible={!login} switcher={() => setLogin(!login)}/>
        <SlideCover />
      </div>
    );
  }
  
export default DoubleForm;
  