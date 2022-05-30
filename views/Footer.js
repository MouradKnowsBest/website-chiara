import React from "react";
import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="./chiara-footer.jpg" alt="chiara-portrait"></img>

      <div
        style={{
          width: "480px",
          zIndex: 9,
          margin: "180px",
          backgroundColor: "white",
          opacity : 0.85

        }}
      >
        <h1 style={{ textAlign: "center" }}>HI, I AM CHIARA !</h1>
        <h5 style={{ textAlign: "center",  fontStyle:"italic" }}>
          HOLISTIC HEALTH & WELNESS COACH
        </h5>
        <p
          style={{
            marginTop: "10px",
            textAlign: "center",
            margin: "20px",
            textIndent: 30,
            textAlign: "justify",
          }}
        >
          Creating a life you love takes a willingness to dig under the surface
          of who you are and reveal what it is you want for your life. Having a
          coach to support, challenge and motivate you can make the sometimes
          daunting task of discovery one that is easier, and feel more do-able.
          In this one-hour introductory coaching call you will discover what
          health coaching is and how it can be used to help you reach your
          health and lifestyle goals. We will talk about your wellness needs and
          goals. You will receive advice on where you could start in reaching
          those goals, and what, if any, coaching package is right for you.
        </p>
        <button
          style={{
            backgroundColor: "black",
            color: "#F1EAE4",
            padding: "10px",
            marginLeft: "180px",
            marginBottom: "10px"
          }}
        >
          LEARN MORE
        </button>
      </div>
    </footer>
  );
}

export default Footer;
