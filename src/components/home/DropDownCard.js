import React from "react";
import apps from "../../images/apps.png";
import signOutIcon from "../../images/sign-out.png";
import styles from "./dropDown.module.scss";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import  { useNavigate } from 'react-router-dom'

const DropDownPanel = () => {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
     navigate('/');
    
  };
  return (

    auth.currentUser &&  <div className={styles.dropDownCard}>
        <p className={styles.userName}>{auth.currentUser.email}</p>

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
