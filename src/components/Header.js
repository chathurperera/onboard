import React, { useState } from "react";
import styles from "../components/header.module.scss";
import profileImage from "../images/profileImage.png";
import downArrow from "../images/downArrow.png";
import userPlaceholder from "../images/user.png";
import { useAuth0 } from "@auth0/auth0-react";
import DropDownPanel from "./DropDownCard";

export const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, logout } = useAuth0();
  const [login, setLoggedIn] = useState(false);
  const getAuthStatus = () => {
    console.log(isAuthenticated);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.logo}>
          <h1>ONBOARD</h1>
        </div>
        <div className={styles.profile} onClick={() => loginWithRedirect()}>
          {!isAuthenticated && (
            <>
              <img
                onClick={() => getAuthStatus()}
                src={userPlaceholder}
                className={styles.profileImage}
                alt=""
              />
              <button>Login</button>
            </>
          )}
          {isAuthenticated ? (
            <>
              {/* <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                LOGOUT
              </button> */}
              {user?.picture && <img className={styles.profileImage} src={user.picture} alt={user.name} />}
              <h2 className={styles.userName}>{user?.name}</h2>
              
              {/* <h2>{user && user}</h2> */}
            </>
          ) : (
            ""
          )}
          {/* <p>Chathura perera</p> */}
          <img src={downArrow} className={styles.downArrow} alt="" />
        </div>
        <DropDownPanel />
      </div>
    </header>
  );
};

export default Header;
