import React from "react";
import DoubleForm from "../../../components/Forms/DoubleForm/DoubleForm";
import styles from "./SignInPage.module.css";
import wallpaper from "../../../assets/fuji_bw.png";

function SignInPage() {


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

export default SignInPage;