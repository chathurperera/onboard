import React, { useState } from "react";
import styles from "../components/header.module.scss";
import profileImage from "../images/profileImage.png";
import downArrow from "../images/downArrow.png";
import userPlacehoder from "../images/user.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, logout} = useAuth0();
  const [login, setLoggedIn] = useState(false);
  const getAuthStatus = () => {
    console.log(isAuthenticated)
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.logo}>
          <h1>ONBOARD</h1>
        </div>
        <div className={styles.profile} onClick={() => loginWithRedirect()}>
          <img
          onClick={() => getAuthStatus()}
            src={isAuthenticated ? user.picture : userPlacehoder}
            className={styles.profileImage}
            alt=""
          />
          {isAuthenticated ? (
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              LOGOUT
            </button>
          ) : (
            ""
          )}
          {/* <p>Chathura perera</p> */}
          <img src={downArrow} className={styles.downArrow} alt="" />
        </div>
      </div>
    </header>
  );
}
