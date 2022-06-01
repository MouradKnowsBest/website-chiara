import React from "react";
import styles from "../styles/Home.module.css";

function Main() {
  return (
    <>
      <div className={styles.title}>
        <h1> How can I help ? </h1>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/Services/Coaching" target="_blank" className={styles.card}>
            <h2>COACHING &rarr;</h2>
            <img src="./coaching.jpg" alt="chiara-portrait"></img>
            <p>Find in-depth information about Coaching sessions</p>
          </a>
        </div>
        <div className={styles.grid}>
          <a href="/Services/Yoga" target="_blank" className={styles.card}>
            <h2>YOGA &rarr;</h2>
            <img src="./yoga.jpg" alt="chiara-portrait"></img>

            <p>Find in-depth information about Yoga sessions</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="/Services/Astrology" target="_blank" className={styles.card}>
            <h2>ASTROLOGY &rarr;</h2>
            <img src="./astrology.jpg" alt="chiara-portrait"></img>
            <p>Find in-depth information about Astrology sessions</p>
          </a>
        </div>

      </main>
    </>
  );
}

export default Main;
