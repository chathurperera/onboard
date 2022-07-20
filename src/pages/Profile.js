import React, { useState } from "react";
import styles from "./profile.module.scss";
import close from "../images/close (2).png";
import jobRoles from "../data.json";
import skills from "../skills.json";

const Profile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [skillsSearchQuery, setSkillsSearchQuery] = useState("");
  const [openToRoles, setOpenToRoles] = useState([]);
  const [skills, setSkills] = useState([]);

  const addRole = (newRole) => {
    setOpenToRoles((prevRoles) => [...prevRoles, newRole]);
    setSearchQuery("");
  };
  const addSkill = (newSkill) => {
    setSkills((prevRoles) => [...prevRoles, newSkill]);
    setSkillsSearchQuery("");
  };
  return (
    <main className={styles.container}>
      <div className={styles.profile}>
        <div>
          <div className={styles.detailsSection}>
            <div className={styles.cardHeader}>BASIC INFO</div>
            <div className={styles.detailsWrapper}>
              <div className="right">
                <div className={styles.inputBox}>
                  <label htmlFor="">First Name</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="">Last Name</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="right">
                <div className={styles.inputBox}>
                  <label htmlFor="">Email</label>
                  <input type="email" name="" id="" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="">Phone Number</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className={`${styles.inputBox} ${styles.fullWidth}`}>
                <label htmlFor="">Address</label>
                <input type="text" name="" id="" />
              </div>
              <div className={`${styles.inputBox} ${styles.fullWidth}`}>
                <label htmlFor="">About</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </div>
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.cardHeader}>EXTERNAL LINKS</div>
            <div className={styles.detailsWrapper}>
              <div className="right">
                <div className={styles.inputBox}>
                  <label htmlFor="">Linkedin</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="">Github</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="right">
                <div className={styles.inputBox}>
                  <label htmlFor="">Portfolio</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="">Codersrank</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailsSection}>
          <div className={styles.cardHeader}>SKILLS & EXPERIENCE</div>
          <div className={styles.detailsWrapper}>
            <div className={`${styles.inputBox} ${styles.fullWidth}`}>
              <label>Roles you are open to</label>
              <div className={styles.openRoles}>
                {openToRoles.map((role) => {
                  return (
                    <div className={styles.role}>
                      {role} <img src={close} alt="close icon" />
                    </div>
                  );
                })}
                <input
                  value={searchQuery}
                  className={styles.rolesAddInput}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  name=""
                  id=""
                />
              </div>
              {searchQuery && (
                <div className={styles.rolesDropdown}>
                  {jobRoles.occupations
                    .filter((role) => {
                      return role.startsWith(searchQuery);
                    })
                    .slice(0, 6)
                    .map((roleName, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => addRole(roleName)}
                          className={styles.roleOption}
                        >
                          {roleName}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
            <div className={`${styles.inputBox} ${styles.fullWidth}`}>
              <label>Skills</label>
              <div className={styles.openRoles}>
                {openToRoles.map((role) => {
                  return (
                    <div className={styles.role}>
                      {role} <img src={close} alt="close icon" />
                    </div>
                  );
                })}
                <input
                  value={skillsSearchQuery}
                  className={styles.rolesAddInput}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  name=""
                  id=""
                />
              </div>
              {skillsSearchQuery && (
                <div className={styles.rolesDropdown}>
                  {skills.skills
                    .filter((role) => {
                      return role.startsWith(skillsSearchQuery);
                    })
                    .slice(0, 6)
                    .map((skill, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => addSkill(skill)}
                          className={styles.roleOption}
                        >
                          {skill}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
