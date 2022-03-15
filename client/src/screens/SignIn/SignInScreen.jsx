import React from "react";
import DoubleForm from "../../components/Global/Forms/DoubleForm/DoubleForm";
import wallpaper from "../../assets/fuji_bw.png";

function SignInScreen() {


    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <img
                className="absolute bg-cover left-0 right-0 h-full w-full object-cover -z-10"
                src={wallpaper}
                alt="Wallpaper"
            />
            <DoubleForm />
        </div>
    )
}

export default SignInScreen;