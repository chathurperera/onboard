import React, { useState } from "react";
import LoginHeader from "../components/login/LoginHeader";
import styles from "../pages/login.module.scss";
import show from "../images/show.png";
import hide from "../images/hide.png";
import google from "../images/google.png";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate , Link } from "react-router-dom";


function Login() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      navigate("/");
    });
  };

  const login = async (e) => {
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
  };
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
            <input
              type="email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <img
              src={showPassword ? show : hide}
              alt="show icon"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
            <label>Password</label>
            <input
              onChange={(e) => setLoginPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
            />
          </div>
          <button onClick={(e) => login(e)}>Sign in</button>
          <div className={styles.googleLogin} onClick={signInWithGoogle}>
            <img src={google} alt="google" />
            <p>Sign in with Google</p>
          </div>
          <p>
            Forgot password? <span>Reset Here</span>
          </p>
          <p className={styles.register}>
            New to ONBORAD? <span> <Link to='/Register'>Register Now</Link>  </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
