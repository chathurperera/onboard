import React, { useState } from "react";
import LoginHeader from "../components/login/LoginHeader";
import styles from "../pages/login.module.scss";
import show from "../images/show.png";
import hide from "../images/hide.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail,setLoginEmail] = useState('');
  const [loginPassword,setLoginPassword] = useState('');

  
  const  login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  }
  // const async logout = () => {
  
  // }
  return (
    <div className={styles.login}>
      <LoginHeader />
      <div className={styles.loginWrap}>
        <form>
          <h1>Welcome Back !</h1>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input type="email" onChange={(e) => setLoginEmail(e.target.value)} />
          </div>
          <div className={styles.inputBox}>
            <img
              src={showPassword ? show : hide}
              alt="show icon"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
            <label>Password</label>
            <input onChange={(e) => setLoginPassword(e.target.value)} type={showPassword ? "text" : "password"} />
          </div>
          <button onClick={(e) => login(e)}>Sign in</button>
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
