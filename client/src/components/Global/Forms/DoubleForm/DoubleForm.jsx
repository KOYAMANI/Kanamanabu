import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import SlideCover from "../../../HTMLInteracters/SlideCover/SlideCover";

function DoubleForm() {

  const [visible, setVisible] = useState(true);

    return (
      <div className="relative flex h-4/5 lg:h-3/4 w-4/5 md:w-3/5 place-content-start place-items-center">
        {/* MAKE RESPONSIVE HERE */}
        <LoginForm visible={visible} switcher={() => setVisible(!visible)}/>
        <RegisterForm visible={!visible} switcher={() => setVisible(!visible)}/>
        <SlideCover />
      </div>
    );
  }
  
export default DoubleForm;
  