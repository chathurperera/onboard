import React, { useState } from "react";
import LoginHeader from "../components/login/LoginHeader";
import styles from "../pages/Register.module.scss";
import show from "../images/show.png";
import hide from "../images/hide.png";
import spinner from "../images/Spinner.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate  } from "react-router-dom";


function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [profileCreating, setProfileCreating] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setProfileCreating(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((res) => {
        localStorage.setItem('firstName',firstName);
        localStorage.setItem('lastName',lastName);
        localStorage.setItem('phone',phone);
        setFirstName('');
        setLastName('');
        setPhone('');
        setRegisterEmail('');
        setRegisterPassword('');
        setProfileCreating(false);
        navigate("/");
      });
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.register}>
      <LoginHeader />
      <div className={styles.registerWrap}>
        <form>
          <h1>Let's get started</h1>
          <div className={styles.inputWrap}>
            <div className={styles.inputBox}>
              <label>First name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
              />
            </div>
            <div className={styles.inputBox}>
              <label>Last name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Email address</label>
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              type={showPassword ? "text" : "password"}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
          <button onClick={(e) => register(e)}> {profileCreating ? <img src={spinner} alt="" width={40} /> : 'Create Profile'}</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
