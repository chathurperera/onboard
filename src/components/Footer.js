import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>
          <h1>ONBOARD</h1>
          <p>2540 Bottom Lane Buffalo New York</p>
        </div>
        <div className={styles.footerMenu}>
          <div className={styles.col}>
            <h2>ONBOARD</h2>
            <p>For Business</p>
            <p>Company</p>
            <p>Resources</p>
          </div>
          <div className={styles.col}>
            <h2>Audience</h2>
            <p>Employees</p>
            <p>Hiring Managers</p>
            <p>Candidates</p>
          </div>
          <div className={styles.col}>
            <h2>Product</h2>
            <p>Pricing</p>
            <p>Features</p>
            <p>Integrations</p>
            <p>FAQ</p>
          </div>
          <div className={styles.col}>
            <h2>Help</h2>
            <p>Customer Support</p>
            <p>Documentation</p>
            <p>API</p>
          </div>
          <div className={styles.col}>
            <h2>Legal</h2>
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>GDPR</p>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Ⓒ 2022 ONBOARD All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
