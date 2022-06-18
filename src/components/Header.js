import React, { useState } from "react";
import styles from "../components/header.module.scss";
import profileImage from "../images/profileImage.png";
import downArrow from "../images/downArrow.png";
import signOut from "../images/sign-out.png";
import userPlaceholder from "../images/user.png";
import { useAuth0 } from "@auth0/auth0-react";
import DropDownPanel from "../components/home/DropDownCard";
import { NavLink ,useLocation } from "react-router-dom";


export const Header = () => {
  
  const [login, setLoggedIn] = useState(false);
  const [expandPanel, setExpandPanel] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.logo}>
          <h1>ONBOARD</h1>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">Find Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/">Company Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/">Find Salaries</NavLink>
          </li>
        </ul>
        <div className={styles.profile}>
            <>
              <nav>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/login'>Sign up</NavLink>
              </nav>
            </>
          {/* {isAuthenticated ? (
            <>
              {user?.picture && (
                <img
                  className={styles.profileImage}
                  src={user.picture}
                  alt={user.name}
                />
              )}
              <h2 className={styles.userName}>{user?.name}</h2>
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
          )} */}
        </div>
        {expandPanel && <DropDownPanel />}
      </div>
    </header>
  );
};

export default Header;
