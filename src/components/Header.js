import React, { useState } from "react";
import styles from "../components/header.module.scss";
import profileImage from "../images/profileImage.png";
import userNoPic from "../images/userNoPic.png";
import downArrow from "../images/downArrow.png";
import signOut from "../images/sign-out.png";
import userPlaceholder from "../images/user.png";
import { useAuth0 } from "@auth0/auth0-react";
import DropDownPanel from "../components/home/DropDownCard";
import { NavLink, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const Header = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [expandPanel, setExpandPanel] = useState(false);
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setName(user.displayName);
        setEmail(user.email);
        setProfilePic(user.photoURL);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  console.log(location.pathname);
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.logo}>
          <h1>ONBOARD</h1>
        </div>
        {LoggedIn && (
          <ul className={styles.navLinks}>
            <li className={location.pathname === "/" && styles.routeStyles}>
              <NavLink to="/">Jobs</NavLink>
            </li>
            <li className={location.pathname === "/requests" && styles.routeStyles}>
              <NavLink to="/requests">Requests</NavLink>
            </li>
            <li className={location.pathname === "/applications" && styles.routeStyles}>
              <NavLink to="/applications">Applications</NavLink>
            </li>
            <li className={location.pathname === "/profile" && styles.routeStyles}>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        )}
        <div className={styles.profile}>
          <>
            {!LoggedIn && (
              <nav>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/Register">Sign up</NavLink>
              </nav>
            )}
          </>
          {LoggedIn && (
            <>
              <img
                className={styles.profileImage}
                src={profilePic ? profilePic : userNoPic}
                alt={name}
              />
              <h2
                className={styles.userName}
                onClick={() => setExpandPanel(!expandPanel)}
              >
                {name ? name : email}
              </h2>
              <img
                src={downArrow}
                className={expandPanel ? styles.upArrow : styles.downArrow}
                alt=""
                onClick={() => setExpandPanel(!expandPanel)}
              />
            </>
          )}
          {/* {LoggedIn && (
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
