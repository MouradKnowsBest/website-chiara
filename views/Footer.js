import React from "react";
import styles from "../styles/Home.module.css";

function Footer() {
  return (

    <footer
      style={{
        position: "relative",
        marginLeft: "350px",
      }}
      className={styles.footer}
    >
      <img
        style={{
          height: "510px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        src="./chiara-portrait.png"
        alt="chiara-portrait"
      ></img>

      <div
        style={{
          width: "480px",
          zIndex: 9,
          margin: "180px",
          backgroundColor: "white",
        }}
      >
        <h1>HI, I AM CHIARA !</h1>
        <subtitle>HOLISTIC HEALTH & WELNESS COACH</subtitle>
        <p
          style={{
            marginTop: "80px",
            textAlign: "center",
            margin: "20px",
            marginTop: "25px",
            textIndent: 30,
            textAlign:"justify"

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
            marginLeft: "170px",
          }}
        >
          LEARN MORE
        </button>
      </div>


    </footer>
  );
}

export default Footer;
