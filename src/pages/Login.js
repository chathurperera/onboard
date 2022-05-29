import React, { useState } from "react";
import LoginHeader from "../components/login/LoginHeader";
import styles from "../pages/login.module.scss";
import show from "../images/show.png";
import hide from "../images/hide.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.login}>
      <LoginHeader />
      <div className={styles.loginWrap}>
        <form>
          <h1>Welcome Back !</h1>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input type="email" />
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
          <button>Sign in</button>
          <p>
            Forgot password? <span>Reset Here</span>
          </p>
          <p className={styles.register}>
            New to ONBORAD? <span>Register Now</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
