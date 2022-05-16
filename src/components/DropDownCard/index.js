import React from "react";
import apps from "../../images/apps.png";
import signOut from "../../images/sign-out.png";
import styles from "../DropDownCard/dropDown.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
const DropDownPanel = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  return (
    isAuthenticated && (
      <div className={styles.dropDownCard}>
        <p className={styles.userName}>{user.nickname}</p>
        <p className={styles.dashboard}>
          <img src={apps} alt="Dashboard" />
          <span>Dashboard</span>
        </p>
        <p className={styles.dashboard}>
          <img src={signOut} alt="Dashboard" />
          <span>Logout</span>
        </p>
        {/* <div className={styles.buttonwrap}>
          <button>Logout</button>
        </div> */}
      </div>
    )
  );
};

export default DropDownPanel;
