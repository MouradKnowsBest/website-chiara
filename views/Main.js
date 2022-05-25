import React from "react";
import styles from "../styles/Home.module.css";

function Main() {
  return (
    <main style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} className={styles.main}>
      <p style={{ transform: "rotate(-90deg)" }} className={styles.description}>
        How can I help{" "}
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>COACHING &rarr;</h2>
          <img
            style={{ height:"300px", width:"auto" }}
            src="./coaching.jpg"
            alt="chiara-portrait"
          ></img>
          <p>Find in-depth information about Coaching sessions</p>
        </a>
      </div>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>YOGA &rarr;</h2>
          <img
            style={{ height:"300px", width:"auto" }}
            src="./yoga.webp"
            alt="chiara-portrait"
          ></img>
          <p>Find in-depth information about Yoga sessions</p>
        </a>
      </div>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>ASTROLOGY &rarr;</h2>
          <img
            style={{ height:"300px", width:"auto" }}
            src="./astrology.jpg"
            alt="chiara-portrait"
          ></img>
          <p>Find in-depth information about Astrology sessions</p>
        </a>
      </div>

      <p style={{ transform: "rotate(90deg)" }} className={styles.description}>
        How can I help{" "}
      </p>

    </main>
  );
}

export default Main;
