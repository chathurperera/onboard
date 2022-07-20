import React from 'react'

const test = () => {
  return (
    <div>
                <div className={styles.inputBox}>
          <label>Other Roles you are open to</label>
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
    </div>
  )
}

export default test