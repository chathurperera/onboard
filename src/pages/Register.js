import React , { useState } from "react";
import LoginHeader from "../components/login/LoginHeader";
import styles from "../pages/Register.module.scss";
import show from "../images/show.png";
import hide from "../images/hide.png";


function Register() {
    const [showPassword, setShowPassword] = useState(false);
 
    return (
    <div className={styles.register}>
      <LoginHeader />
      <div className={styles.registerWrap}>
        <form>
          <h1>Let's get started</h1>
          <div className={styles.inputWrap}>
            <div className={styles.inputBox}>
              <label>First name</label>
              <input type="text" />
            </div>
            <div className={styles.inputBox}>
              <label>Last name</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Email address</label>
            <input type="email" />
          </div>
          <div className={styles.inputBox}>
            <label>Phone</label>
            <input type="tel" />
          </div>
          <div className={styles.inputBox}>
            <img
              src={showPassword ? show : hide}
              alt="show icon"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
            <label>Password</label>
            <input type={showPassword ? "text" : "password"} />
          </div>
          <button>Create Profile</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
