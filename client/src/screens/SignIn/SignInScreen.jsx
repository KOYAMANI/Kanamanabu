import React from "react";
import DoubleForm from "../../components/Global/Forms/DoubleForm/DoubleForm";
import styles from "./SignInScreen.module.css";
import wallpaper from "../../assets/fuji_bw.png";

function SignInScreen() {


    return (
        <div className={styles.main}>
            <img
                className={styles.wallpaper}
                src={wallpaper}
                alt="Wallpaper"
            />
            <DoubleForm />
        </div>
    )
}

export default SignInScreen;