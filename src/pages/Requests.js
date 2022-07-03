import React from "react";
import { useState } from "react";
import Request from "../components/requests/Request";
import empty from "../images/empty.png";
import styles from "./requests.module.scss";

const Requests = () => {
  const [requests, setRequests] = useState([
    { title: "offer", id: 1 },
    { title: "offer", id: 2 },
  ]);
  return (
    <main className={styles.container}>
      <div className={styles.requests}>
        {requests.length === 0 && (
          <div className={styles.noRequests}>
            <img src={empty} alt="empty documents" />
            <p>No Requests</p>
          </div>
        )}
        {requests.map((request) => (
          <Request key={request.id} />
        ))}
      </div>
    </main>
  );
};

export default Requests;
