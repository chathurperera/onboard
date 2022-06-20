import React from "react";
import apps from "../../images/apps.png";
import signOutIcon from "../../images/sign-out.png";
import styles from "./dropDown.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

const DropDownPanel = () => {
  
  const logout = async () => {
    await signOut(auth);
  };
  return (

    auth.currentUser &&  <div className={styles.dropDownCard}>
        <p className={styles.userName}>{auth.currentUser.email}</p>
        <p className={styles.dashboard}>
          <img src={apps} alt="Dashboard" />
          <span>Dashboard</span>
        </p>
        <p
          className={styles.dashboard}
          onClick={logout}
        >
          <img src={signOutIcon} alt="logout icon " />
          <span>Logout</span>
        </p>
      </div>
  );
};

export default DropDownPanel;
