import React, { useState } from "react";

function SlideCover(props) {

const [left, setLeft] = useState(true);

const leftHeading = "KanaManaBu";
const leftSubheading = "For beginners and intermediates";
const leftSwitch = "Already have an Account? ";
const leftSwitchButton = "Log In";

const rightHeading = "おかえりなさい";
const rightSubheading = "Welcome back!";
const rightSwitch = "Don't have an Account? ";
const rightSwitchButton = "Register";

const isVisible = props.visible;

  return (
    <div className={(left ? 'right-1/2' : 'right-0') + " " + 'duration-300 absolute w-1/2 h-4/5 bg-gray-800 z-20 hidden lg:block'}>
      <h1 className="m-8 text-white text-2xl">{left ? leftHeading : rightHeading}</h1>
      <h2 className="m-8 text-gray-200 text-2xl font-light border-l-8 border-gray-200 pl-2">{left ? leftSubheading : rightSubheading}</h2>
      <p className="m-8 text-white">{left ? leftSwitch : rightSwitch}<a className="text-blue-400 hover:cursor-pointer hover:text-blue-200" onClick={() => setLeft(!left)}>{left ? leftSwitchButton : rightSwitchButton}</a></p>
    </div>
  );
}

export default SlideCover;
