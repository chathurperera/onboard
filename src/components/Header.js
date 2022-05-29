import React, { useState } from "react";
import styles from "../components/header.module.scss";
import profileImage from "../images/profileImage.png";
import downArrow from "../images/downArrow.png";
import signOut from "../images/sign-out.png";
import userPlaceholder from "../images/user.png";
import { useAuth0 } from "@auth0/auth0-react";
import DropDownPanel from "../components/home/DropDownCard";

export const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, logout } = useAuth0();
  const [login, setLoggedIn] = useState(false);
  const [expandPanel, setExpandPanel] = useState(false);

  const getAuthStatus = () => {
    console.log(isAuthenticated);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.logo}>
          <h1>ONBOARD</h1>
        </div>
        <div className={styles.profile}>
          {!isAuthenticated && (
            <>
              <img
                onClick={() => loginWithRedirect()}
                src={userPlaceholder}
                className={styles.loginUserImage}
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
              {user?.picture && (
                <img
                  className={styles.profileImage}
                  src={user.picture}
                  alt={user.name}
                />
              )}
              <h2 className={styles.userName}>{user?.name}</h2>

              {/* <h2>{user && user}</h2> */}
            </>
          ) : (
            ""
          )}
          {isAuthenticated && (
            <img
              src={downArrow}
              className={expandPanel ? styles.upArrow : styles.downArrow}
              alt=""
              onClick={() => setExpandPanel(!expandPanel)}
            />
          )}
        </div>
        {expandPanel && <DropDownPanel />}
      </div>
    </header>
  );
};

export default Header;
